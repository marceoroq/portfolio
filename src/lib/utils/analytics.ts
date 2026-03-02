import { track } from "@vercel/analytics";

export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>,
) => {
  // Avoid sending junk events while you're developing on localhost
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event]: ${eventName}`, properties);
    return;
  }

  //Call the service you're using in production
  try {
    track(eventName, properties);
  } catch (error) {
    console.error("Error sending analytics:", error);
  }
};
