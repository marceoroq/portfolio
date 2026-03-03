import { useState, useRef, useEffect } from "preact/hooks";
import { BotMessageSquare, X, Send, Loader2 } from "lucide-preact";

import ChatButton from "./ChatButton";
import { useTranslations } from "src/lib/i18n/utils";
import type { Language } from "src/types";

interface Message {
  role: "user" | "ai";
  text: string;
}

interface ChatbotProps {
  currentLanguage: Language;
}

export default function Chatbot({ currentLanguage }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const t = useTranslations(currentLanguage);

  const toggleChat = () => {
    setIsOpen(!isOpen);

    if (!isOpen) setTimeout(() => inputRef.current?.focus(), 100);
    else setTimeout(() => triggerRef.current?.focus(), 100);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggleChat();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (e?: Event) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Mock AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "ai",
        text: t("chatbot.demo"),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Trigger Button */}
      <ChatButton triggerRef={triggerRef} toggleChat={toggleChat} isOpen={isOpen} triggerText={t("chatbot.trigger")} />

      {/* Chat Window Overlay/Card */}
      <div
        className={`fixed z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        } ${
          // Mobile: Full screen
          "inset-0 md:inset-auto md:bottom-10 md:right-10 md:w-96 md:h-[500px] md:rounded-2xl"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={t("chatbot.title")}
      >
        <div className="flex flex-col h-full w-full bg-bg-primary/95 backdrop-blur-xl border-2 border-slate-500/50 md:rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-500/30 bg-bg-secondary/50">
            <div className="flex items-center gap-2">
              <BotMessageSquare className="w-5 h-5 text-text-primary" />
              <h2 className="font-mono font-bold text-text-primary">{t("chatbot.title")}</h2>
            </div>
            <button
              onClick={toggleChat}
              className="p-1 hover:bg-bg-tertiary rounded-full transition-colors text-text-secondary hover:text-text-primary cursor-pointer"
              aria-label={t("chatbot.close")}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 flex flex-col overflow-y-auto gap-2 p-4 scrollbar-thin scrollbar-thumb-slate-500/20 scrollbar-track-transparent">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-text-muted opacity-60">
                <BotMessageSquare className="w-12 h-12 mb-2" />
                <p className="text-sm text-center">{t("chatbot.trigger")}</p>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex font-mono ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-slate-600 dark:bg-slate-200 text-bg-primary rounded-br-none"
                      : "bg-gray-100 dark:bg-slate-900 text-text-primary rounded-bl-none border border-slate-500/20"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="text-text-primary flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="font-mono text-sm opacity-70">{t("chatbot.waiting")}</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-500/30 bg-bg-secondary/30">
            <div className="relative font-mono flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onInput={(e) => setInputValue(e.currentTarget.value)}
                placeholder={t("chatbot.placeholder")}
                className="w-full bg-bg-tertiary/50 text-text-primary placeholder:text-text-muted rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500/50 border border-slate-500/20 transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-2 p-2 bg-text-primary text-bg-primary rounded-full hover:opacity-90 disabled:opacity-20 disabled:cursor-not-allowed transition-opacity cursor-pointer"
                aria-label={t("chatbot.send")}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
