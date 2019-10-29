// 'use strict';

const localRules = [
  './rules/best-practices',
  './rules/errors',
  './rules/node',
  './rules/style',
  './rules/variables',
  './rules/es6',
  './rules/imports',
  './rules/strict',
].map(require.resolve);

module.exports = {
  parser: 'babel-eslint',
  extends: [...localRules, 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    worker: true,
    jquery: true,
    jest: true,
    mocha: true,
  },
  plugins: ['prettier'],
  rules: {
    strict: 'off',
    'no-plusplus': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
