const token = import.meta.env.TELEGRAM_BOT_TOKEN;
const chatId = import.meta.env.TELEGRAM_CHAT_ID;

export const sendTelegramMessage = async (text: string) => {
  if (!token || !chatId) {
    throw new Error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set");
  }

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        chat_id: chatId,
        parse_mode: "Markdown",
      }),
    });
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    // throw error;
  }
};
