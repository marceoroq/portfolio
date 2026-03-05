// @ts-check
import { defineConfig, envField } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel({
    edgeMiddleware: true,
  }),
  integrations: [
    preact({
      compat: true,
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  env: {
    schema: {
      CONTACT_EMAIL: envField.string({
        context: "server",
        access: "public",
        default: "testing@testing.com",
      }),
    },
  },
});
