import { useState, useRef, useEffect } from "preact/hooks";
import { Send } from "lucide-preact";

interface Props {
  onSend: (text: string) => void;
  disabled: boolean;
  placeholder: string;
}

export function ChatInput({ onSend, disabled, placeholder }: Props) {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (!text.trim() || disabled) return;
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-slate-500/30 bg-bg-secondary/30">
      <div className="relative font-mono flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onInput={(e) => setText(e.currentTarget.value)}
          placeholder={placeholder}
          className="w-full bg-bg-tertiary/50 text-text-primary placeholder:text-text-muted rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500/50 border border-slate-500/20"
        />
        <button
          type="submit"
          disabled={!text.trim() || disabled}
          className="absolute right-2 p-2 bg-text-primary text-bg-primary rounded-full hover:opacity-90 disabled:opacity-20 transition-opacity cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
