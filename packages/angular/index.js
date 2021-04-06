module.exports = {
  extends: ["@baloise/eslint-config-base"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-restricted-imports": ["error", { patterns: ["rxjs/internal/*"] }],
    // "@angular-eslint/component-selector": [
    //   "error",
    //   {
    //     type: "element",
    //     prefix: "app",
    //     style: "kebab-case",
    //   },
    // ],
    // "@angular-eslint/directive-selector": [
    //   "error",
    //   {
    //     type: "attribute",
    //     prefix: "app",
    //     style: "camelCase",
    //   },
    // ],
    // "@angular-eslint/prefer-on-push-component-change-detection": ["warn"],
  },
};
