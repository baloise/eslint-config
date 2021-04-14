module.exports = {
  parser: "@angular-eslint/template-parser",
  plugins: ["@angular-eslint/template"],
  extends: ["plugin:@angular-eslint/template/recommended"],
  rules: {
    "@angular-eslint/template/no-call-expression": ["warn"],
    "@angular-eslint/template/use-track-by-function": ["warn"],
  },
};
