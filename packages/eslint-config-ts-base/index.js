// 'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    'eslint-config-prettify-base',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'warn',
    '@typescript-eslint/camelcase': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',


    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'warn',

    'no-restricted-syntax': 'error',
    'no-console': 'warn',
    'no-param-reassign': 'warn',
    'no-nested-ternary': 'warn',
    'no-underscore-dangle': 'warn',
    'no-cond-assign': 'warn',
    'consistent-return': 'error',
    'prefer-destructuring': 'warn',
    'class-methods-use-this': 'off',
  },
};
