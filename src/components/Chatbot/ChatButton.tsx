import { BotMessageSquare } from "lucide-preact";
import type { RefObject } from "preact";

interface ChatButtonProps {
  triggerRef: RefObject<HTMLButtonElement>;
  toggleChat: () => void;
  isOpen: boolean;
  triggerText: string;
}

export default function ChatButton({
  triggerRef,
  toggleChat,
  isOpen,
  triggerText,
}: ChatButtonProps) {
  return (
    <button
      ref={triggerRef}
      onClick={toggleChat}
      className={`font-mono tracking-tight font-medium fixed cursor-pointer bottom-4 md:bottom-10 right-4 md:right-10 bg-bg-primary/80 backdrop-blur-md border-slate-500 border-2 rounded-full text-text-primary px-4 py-2 hover:scale-105 transition-all z-40 shadow-lg ${
        isOpen
          ? "opacity-0 pointer-events-none scale-90"
          : "opacity-100 scale-100"
      }`}
      aria-label={triggerText}
      aria-expanded={isOpen}
    >
      <BotMessageSquare className="w-6 h-6 inline mr-2" />
      {triggerText}
    </button>
  );
}
