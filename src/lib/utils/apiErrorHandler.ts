export const ERROR_CODES = {
  OVERLOADED: "OVERLOADED",
  NOT_SUPPORTED: "NOT_SUPPORTED",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;

export interface ExternalApiError {
  message?: string;
  statusCode?: number;
}

export const parseApiError = (error: ExternalApiError | any): string => {
  const message = (error?.message || "").toLowerCase();
  const status = error?.statusCode;

  if (message.includes("high demand") || status === 503) return ERROR_CODES.OVERLOADED;
  if (message.includes("not supported") || status === 404) return ERROR_CODES.NOT_SUPPORTED;
  if (message.includes("exceeded your current quota") || status === 429) return ERROR_CODES.QUOTA_EXCEEDED;

  return ERROR_CODES.INTERNAL_ERROR;
};
