import { useEffect } from "preact/hooks";

export function useEscapeKey(onEscape: () => void, condition: boolean = true) {
  useEffect(() => {
    if (!condition) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onEscape();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEscape, condition]);
}
