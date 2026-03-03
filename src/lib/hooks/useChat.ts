import type { RefObject } from "preact";
import { useState, useCallback } from "preact/hooks";
import type { Message } from "src/types";

export function useChat(mockAiText: string) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const sendMessage = useCallback(
    (text: string) => {
      setMessages((prev) => [...prev, { role: "user", text }]);
      setIsTyping(true);

      // Mock AI response, replace with real API call
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "ai", text: mockAiText }]);
        setIsTyping(false);
      }, 1500);
    },
    [mockAiText],
  );

  return { isOpen, messages, isTyping, toggle, sendMessage };
}
