import type { Language } from "src/types";
import { useTranslations } from "../i18n/utils";

export const ERROR_MESSAGES = {
  OVERLOADED: "chatbot.error.overloaded",
  NOT_SUPPORTED: "chatbot.error.notSupported",
  QUOTA_EXCEEDED: "chatbot.error.quoteExceeded",
  TIMEOUT: "chatbot.error.timeout",
  DEFAULT: "chatbot.error.default",
} as const;

export const getUserFriendlyErrorMessage = (error: Error | any, lang: Language): string => {
  const msg = error?.message || "";
  const t = useTranslations(lang);

  if (msg.includes("OVERLOADED") || msg.includes("503")) return t(ERROR_MESSAGES.OVERLOADED);
  if (msg.includes("NOT_SUPPORTED")) return t(ERROR_MESSAGES.NOT_SUPPORTED);
  if (msg.includes("QUOTA_EXCEEDED")) return t(ERROR_MESSAGES.QUOTA_EXCEEDED);
  if (msg.includes("TIMEOUT_EMPTY_RESPONSE")) return t(ERROR_MESSAGES.TIMEOUT);

  return t(ERROR_MESSAGES.DEFAULT);
};
