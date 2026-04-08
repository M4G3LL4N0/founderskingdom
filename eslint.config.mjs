import { defineConfig } from "eslint/config";
import next from "@next/eslint-plugin-next";

export default defineConfig({
  plugins: {
    "@next/next": next
  },
  rules: {
    "@next/next/no-html-link-for-pages": "error",
    "@next/next/no-sync-scripts": "error",
    "@next/next/no-before-interactive-script-outside-document": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  ignorePatterns: [
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts"
  ]
});
