import { defineMiddleware } from "astro:middleware";
import { defaultLang as defaultLocale } from "src/lib/i18n/ui";
import type { Language } from "./types";

const locales = ["es", "en"];
const COOKIE_NAME = "user-locale";

export const onRequest = defineMiddleware((context, next) => {
  const { url, preferredLocale, redirect, cookies } = context;

  if (url.pathname.startsWith("/_astro") || url.pathname.startsWith("/api/") || /\.[a-zA-Z0-9]+$/.test(url.pathname)) {
    return next();
  }

  const [, firstSegment] = url.pathname.split("/");
  const isPathWithLocale = locales.includes(firstSegment);
  const currentUrlLocale = isPathWithLocale ? firstSegment : defaultLocale;

  let targetLocale = defaultLocale;
  const cookieLocale = cookies.get(COOKIE_NAME)?.value;

  if (cookieLocale && locales.includes(cookieLocale)) {
    targetLocale = cookieLocale as Language;
  } else {
    targetLocale = locales.includes(preferredLocale ?? "") ? (preferredLocale! as Language) : defaultLocale;
  }

  if (currentUrlLocale === targetLocale) {
    return next();
  }

  let cleanPath = url.pathname;
  if (isPathWithLocale) {
    cleanPath = url.pathname.replace(`/${firstSegment}`, "") || "/";
  }

  let newPathname = cleanPath;
  if (targetLocale !== defaultLocale) {
    newPathname = `/${targetLocale}${cleanPath === "/" ? "" : cleanPath}`;
  }

  return redirect(newPathname, 302);
});
