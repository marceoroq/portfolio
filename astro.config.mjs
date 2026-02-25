// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    preact({
      compat: true,
    }),
  ],
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
