module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      plugins: ["@angular-eslint"],
      extends: [
        "@baloise/eslint-config-base",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "prettier",
      ],
      rules: {
        "no-restricted-imports": ["error", { patterns: ["rxjs/internal/*"] }],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/prefer-on-push-component-change-detection": ["warn"],
      },
    },
    {
      files: ["*.html"],
      parser: "@angular-eslint/template-parser",
      plugins: ["@angular-eslint/template"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "@angular-eslint/template/no-call-expression": ["warn"],
        "@angular-eslint/template/use-track-by-function": ["warn"],
      },
    },
  ],
};
