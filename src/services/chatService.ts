// services/chatService.ts
import type { Message } from "src/types";

interface StreamHandlers {
  onChunkReceived: (chunk: string) => void;
  onFinish: (textReceived: boolean) => void;
}

export const mapToApiPayload = (messages: Message[]): any[] => {
  return messages.map((m) => ({
    role: m.role === "ai" ? "assistant" : "user",
    content: m.text,
  }));
};

export const fetchChatStream = async (apiMessages: any[], handlers: StreamHandlers): Promise<void> => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: apiMessages }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.type || `HTTP_${response.status}`);
  }

  const reader = response.body?.getReader();
  if (!reader) throw new Error("READER_NOT_FOUND");

  const decoder = new TextDecoder();
  let buffer = "";
  let textReceived = false;

  while (true) {
    const { done, value } = await reader.read();

    if (value) {
      buffer += decoder.decode(value, { stream: !done });
      const lines = buffer.split("\n");
      buffer = lines.pop() || ""; // Keep the incomplete line in the buffer

      let chunkToRender = "";

      for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine || trimmedLine === "data: [DONE]") continue;

        const jsonPayload = trimmedLine.replace(/^data:\s*/, "");
        const parsedData = JSON.parse(jsonPayload);

        if (parsedData.errorText) throw new Error(parsedData.errorText);

        if (parsedData.delta) {
          chunkToRender += parsedData.delta;
          textReceived = true;
        }
      }

      // We call the UI updater only ONCE per stream read, passing the accumulated chunk
      if (chunkToRender) {
        handlers.onChunkReceived(chunkToRender);
      }
    }

    if (done) {
      handlers.onFinish(textReceived);
      break;
    }
  }
};
