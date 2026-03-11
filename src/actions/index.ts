import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { sendTelegramMessage } from "src/services/telegramService";

export const server = {
  notifyActivity: defineAction({
    input: z.object({
      message: z.string(),
    }),
    handler: async (input) => {
      await sendTelegramMessage(input.message);
      return { success: true };
    },
  }),
};
