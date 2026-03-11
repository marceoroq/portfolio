import { useRef, useEffect } from "preact/hooks";
import { BotMessageSquare, Loader2 } from "lucide-preact";
import type { Message } from "src/types";

interface Props {
  messages: Message[];
  isTyping: boolean;
  texts: { trigger: string; waiting: string };
}

export function MessageList({ messages, isTyping, texts }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-4 text-text-muted opacity-60">
        <BotMessageSquare className="w-12 h-12 mb-2" />
        <p className="text-sm text-center">{texts.trigger}</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 gap-2 flex flex-col scrollbar-thin">
      {messages.map(
        (msg, idx) =>
          msg.text.length > 0 && (
            <div key={idx} className={`flex font-mono ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-slate-600 dark:bg-slate-200 text-bg-primary rounded-br-none dark:font-medium leading-5" : "bg-gray-100 dark:bg-slate-900 text-text-primary rounded-bl-none"}`}
              >
                {msg.text}
              </div>
            </div>
          ),
      )}

      {isTyping && (
        <div className="flex justify-start text-text-primary items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="font-mono text-sm opacity-70">{texts.waiting}</span>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
