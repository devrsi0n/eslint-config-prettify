'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-prettier',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['prettier'],
  rules: {
    strict: 'error',
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5',
    }],
  },
};
