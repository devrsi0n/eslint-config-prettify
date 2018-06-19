'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['prettier'],
  rules: {
    strict: 'off',
    'no-plusplus': 'off',
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5',
    }],
  },
};
