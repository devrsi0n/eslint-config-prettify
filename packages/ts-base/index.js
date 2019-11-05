// 'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'eslint-config-prettify-base',
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      'babel-eslint': ['.js', '.jsx', '.json'],
    },
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
        directory: process.cwd(),
      },
    },
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': [
      'warn',
      { properties: 'never', ignoreDestructuring: false },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '_' }],
  },
  // overrides: [
  //   {
  //     // enable the rule specifically for TypeScript files
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       '@typescript-eslint/no-var-requires': ['off'],
  //     },
  //   },
  // ],
};
