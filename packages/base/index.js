module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    eqeqeq: ["error"],
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-else-return": ["error", { allowElseIf: false }],
    "no-implicit-coercion": ["error"],
    "@typescript-eslint/no-unnecessary-condition": [
      "error",
      { allowConstantLoopConditions: true },
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
      },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": ["error"],
    "@typescript-eslint/require-array-sort-compare": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    "@typescript-eslint/prefer-reduce-type-parameter": ["error"],
    "@typescript-eslint/prefer-for-of": ["error"],
    "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],
    "@typescript-eslint/no-floating-promises": "off",
  },
};
