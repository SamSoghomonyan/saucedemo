import tsParser from "@typescript-eslint/parser";
import tsPlugin  from "@typescript-eslint/eslint-plugin";
import wdioPlugin from "eslint-plugin-wdio";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        browser: "readonly",
        $: "readonly",
        $$: "readonly",
        expect: "readonly",
        process: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      wdio: wdioPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",

      "wdio/no-pause": "error",
      "wdio/await-expect": "error",

      "no-console": "off",
      "prefer-const": "error",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "semi": ["error", "always"],
    },
  },
];