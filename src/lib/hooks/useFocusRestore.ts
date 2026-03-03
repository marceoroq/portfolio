import type { RefObject } from "preact";
import { useEffect, useRef } from "preact/hooks";

export function useFocusRestore(triggerRef: RefObject<HTMLButtonElement>, isOpen: boolean) {
  const wasOpen = useRef(false);

  useEffect(() => {
    if (isOpen) {
      wasOpen.current = true;
    } else if (wasOpen.current && !isOpen) {
      triggerRef.current?.focus();
      wasOpen.current = false;
    }
  }, [isOpen, triggerRef]);
}
