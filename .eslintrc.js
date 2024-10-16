module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
    commonjs: true,
  },
  extends: [
    'google',
    'plugin:node/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': ['error', 'unix'],
    'no-console': 0,
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'require-jsdoc': 'off',
  },
};
