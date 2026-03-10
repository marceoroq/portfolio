// hooks/useChat.ts
import { useState, useCallback } from "preact/hooks";
import type { Language, Message } from "src/types";
import { getUserFriendlyErrorMessage } from "src/lib/utils/chatErrors";
import { fetchChatStream, mapToApiPayload } from "src/services/chatService";

export function useChat(lang: Language) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const appendToLastMessage = useCallback((chunk: string) => {
    setMessages((prev) => {
      const copy = [...prev];
      const lastIndex = copy.length - 1;
      copy[lastIndex] = { ...copy[lastIndex], text: copy[lastIndex].text + chunk };
      return copy;
    });
  }, []);

  const replaceLastMessage = useCallback((newText: string) => {
    setMessages((prev) => {
      const copy = [...prev];
      const lastIndex = copy.length - 1;
      copy[lastIndex] = { ...copy[lastIndex], text: newText };
      return copy;
    });
  }, []);

  const sendMessage = async (text: string) => {
    const newUserMessage: Message = { role: "user", text };
    const initialAiMessage: Message = { role: "ai", text: "" };

    // Optimistic UI update
    setMessages((prev) => [...prev, newUserMessage, initialAiMessage]);
    setIsTyping(true);

    const apiPayload = mapToApiPayload([...messages, newUserMessage]);

    try {
      await fetchChatStream(apiPayload, {
        onChunkReceived: (chunk) => {
          appendToLastMessage(chunk);
        },
        onFinish: (textReceived) => {
          if (!textReceived) throw new Error("TIMEOUT_EMPTY_RESPONSE");
        },
      });
    } catch (error: any) {
      const friendlyMessage = getUserFriendlyErrorMessage(error, lang);
      replaceLastMessage(friendlyMessage);
    } finally {
      setIsTyping(false);
    }
  };

  return { isOpen, messages, isTyping, toggle, sendMessage };
}
