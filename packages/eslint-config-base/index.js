'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint-config-airbnb-base', 'eslint-config-prettier'].map(
    require.resolve
  ),
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    mocha: true,
  },
  plugins: ['jest', 'prettier'],
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
