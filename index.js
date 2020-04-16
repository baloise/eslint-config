module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'comma-dangle': ['error', 'always'],
        "semi": "off",
        "@typescript-eslint/semi": ["error", "never"],
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'none',    // 'none' or 'semi' or 'comma'
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',    // 'semi' or 'comma'
                requireLast: false,
            },
        }],
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/interface-name-prefix': 'off',
    }
};