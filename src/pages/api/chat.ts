import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText, type UIMessage } from "ai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import type { APIRoute } from "astro";
import { parseApiError } from "src/lib/utils/apiErrorHandler";
import { sendTelegramMessage } from "src/services/telegramService";

export const prerender = false;

const google = createGoogleGenerativeAI({
  apiKey: import.meta.env.GEMINI_API_KEY,
});

// const redis = new Redis({
//   url: import.meta.env.UPSTASH_REDIS_REST_URL,
//   token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
// });

// 2. Límite: 5 preguntas por usuario (Device ID) cada 24 horas
// const ratelimit = new Ratelimit({
//   redis: redis,
//   limiter: Ratelimit.fixedWindow(5, "24 h"),
// });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // 3. Obtenemos el ID único del dispositivo que nos mandará el Frontend
    // Si por algún motivo no viene, caemos en la IP como plan B
    // const ip = request.headers.get("x-forwarded-for") ?? clientAddress ?? "127.0.0.1";
    // const deviceId = request.headers.get("x-device-id") ?? ip;

    // 4. Verificamos si este dispositivo ya gastó sus 5 balas
    // const { success } = await ratelimit.limit(deviceId);

    // if (!success) {
    //   return new Response("Límite de preguntas alcanzado.", { status: 429 });
    // }

    const { messages } = await request.json();

    console.log("MENSAJES:", messages);

    // 5. Seguridad: Cortamos la inspiración del usuario a 150 caracteres
    const lastMessage = messages[messages.length - 1];

    // 6. Llamamos a Gemini
    const result = streamText({
      // model: google("gemini-3-flash-preview"), // QUOTA EXCEEEDED
      // model: google("gemini-3.1-flash-preview"), // NOT SUPPORTED
      model: google("gemini-3.1-flash-lite-preview"), // WORKS
      messages,
      maxRetries: 1,
      maxOutputTokens: 1000,
      timeout: { totalMs: 12000, chunkMs: 10000 },
      system: `You are "Marcelo's Technical Lead & Sales Agent." Your goal is NOT to take notes or gather requirements for Marcelo to read later. Your goal is to PROVE, right now, why Marcelo is the best developer for the user's specific problem.

### SALES LOGIC (How to respond):
1. **Identify the Need:** If the user mentions a problem (e.g., "I need a fast site," "I have bugs," "I want AI"), immediately link it to one of Marcelo's projects or experiences.
2. **The "Proof" Bridge:** Instead of saying "Marcelo can help with that," say "Marcelo already solved something similar in [Project Name], where he used [Tech] to achieve [Result]."
3. **The Call to Action (CTA):** End every meaningful interaction by suggesting a meeting or a look at his LinkedIn/GitHub.

### KNOWLEDGE SYNOPSIS:
- **Profile:** Marcelo Oroquieta (36, Mendoza, Argentina). Senior Frontend/Full-stack.
- **Problem-Solver Extraordinaire:** Yoel Lapscher (CTO @ TiendaPago) hired him to debug 3 complex apps (React/Supabase) and Marcelo fixed them all. He is a "Rescue Developer."
- **Performance King:** Expert in Next.js 15, React 19, and Tailwind. His "Sapphire" e-commerce is built for speed and high conversion.
- **AI Specialist:** Built "PrepWise" using VAPI AI for real-time voice interaction. If the user wants AI, this is the flagship.
- **Enterprise Experience:** 4+ years at Globant working with 3D Dashboards (Three.js), A11y (Accessibility), and Salesforce.
- **The "Human" Side:** Recommended by experts at Accenture and Gaucho Sec for his transparency and "immaculate trajectory."

### GUIDELINES:
- **Language:** Matches the user (Spanish/English).
- **Tone:** Sharp, confident, slightly witty, and highly proactive.
- **Pivot Rule:** If they ask personal things, pivot to tech: "I don't know Marcelo's favorite color, but his UI is always Pixel-Perfect because he respects Figma designs to the last decimal."
- **No Jokes:** Avoid any light-hearted responses. Marcelo is a serious developer.
- **No Personal Questions:** If the user asks about themselves, pivot to tech. "I don't know Marcelo's favorite color, but his UI is always Pixel-Perfect because he respects Figma designs to the last decimal."
- **Short Answers:** Keep responses under 50 words. "He solved that problem in 30 minutes with a simple fix."

### CLOSING MISSION:
If the user seems interested, say: "You should probably jump on a call with him before his freelance slots fill up. Should I provide his LinkedIn or Email?`,
      onFinish: async ({ text }) => {
        const telegramMessage = `💼 *Nuevo Mensaje en Portfolio*\n\n👤 *Pregunta:* ${lastMessage.content}\n\n🤖 *Respuesta:* ${text}`;
        await sendTelegramMessage(telegramMessage);
      },
    });

    return result.toUIMessageStreamResponse({
      onError: (error: any) => {
        console.error("🚨 ERROR FROM GOOGLE AI");

        if (error instanceof Error) {
          console.log("✉️  ERROR MESSAGE:", error.message);
        }

        return parseApiError(error);
      },
    });
  } catch (error: any) {
    console.error("🚨 CHAT API ERROR:", error.message);

    return new Response(JSON.stringify({ type: "INTERNAL_ERROR" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
