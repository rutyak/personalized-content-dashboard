import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    alias: { "@": path.resolve(__dirname, "./src") },
    coverage: {
      provider: "v8",
      exclude: [
        "next.config.ts",
        "postcss.config.mjs",
        "tailwind.config.ts",

        "app/layout.tsx",
        "app/page.tsx",

        "personalized-content-dashboard/app/**",
        "personalized-content-dashboard",
        "eslint.config.mjs",
        "next-env.d.ts",
        "vitest.config.ts",

        "node_modules/**",
        ".next/**",
        "out/**",
      ],
    },
  },
});
