import js from "@eslint/js";
import globals from "globals"; // Import globals, including Jest's
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest"; // Import the Jest plugin

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      jest: jest,
    },
    extends: ["js/recommended", "plugin:jest/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
]);
