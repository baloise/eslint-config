module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: ["@baloise/eslint-config-base"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-restricted-imports": ["error", { patterns: ["rxjs/internal/*"] }],
  },
};
