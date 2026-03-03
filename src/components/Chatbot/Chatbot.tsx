import { BotMessageSquare, X } from "lucide-preact";

import { useTranslations } from "src/lib/i18n/utils";
import { useEscapeKey } from "src/lib/hooks/useEscapeKey";
import { useChat } from "src/lib/hooks/useChat";

import { MessageList } from "src/components/Chatbot/MessageList";
import { ChatInput } from "src/components/Chatbot/ChatInput";
import { ChatButton } from "src/components/Chatbot//ChatButton";

import type { Language } from "src/types";
import { useRef } from "preact/hooks";
import { useFocusRestore } from "src/lib/hooks/useFocusRestore";
import { useFocusTrap } from "src/lib/hooks/useFocusTrap";

export default function Chatbot({ currentLanguage }: { currentLanguage: Language }) {
  const t = useTranslations(currentLanguage);

  const { isOpen, messages, isTyping, toggle, sendMessage } = useChat(t("chatbot.demo"));

  const chatWindowRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEscapeKey(toggle, isOpen);
  useFocusRestore(triggerRef, isOpen);
  useFocusTrap(chatWindowRef, isOpen);

  return (
    <>
      <ChatButton triggerRef={triggerRef} toggleChat={toggle} isOpen={isOpen} triggerText={t("chatbot.trigger")} />

      {isOpen && (
        <dialog
          ref={chatWindowRef}
          // aria-modal="true"
          className="fixed z-50 inset-0 md:inset-auto md:bottom-10 md:right-10 md:w-96 md:h-[500px] md:rounded-2xl flex flex-col bg-bg-primary/95 backdrop-blur-xl border-2 border-slate-500/50 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-500/30 bg-bg-secondary/50">
            <div className="flex items-center gap-2">
              <BotMessageSquare className="w-5 h-5 text-text-primary" />
              <h2 className="font-mono font-bold text-text-primary">{t("chatbot.title")}</h2>
            </div>
            <button onClick={toggle} className="p-1 hover:bg-bg-tertiary rounded-full text-text-secondary">
              <X className="w-5 h-5" />
            </button>
          </div>

          <MessageList
            messages={messages}
            isTyping={isTyping}
            texts={{ trigger: t("chatbot.trigger"), waiting: t("chatbot.waiting") }}
          />

          <ChatInput onSend={sendMessage} disabled={isTyping} placeholder={t("chatbot.placeholder")} />
        </dialog>
      )}
    </>
  );
}
