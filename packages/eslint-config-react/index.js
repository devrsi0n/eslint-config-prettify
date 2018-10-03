'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint-config-airbnb', 'eslint-config-prettier'].map(
    require.resolve
  ),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['prettier'],
  rules: {
    strict: 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 'off'
  },
};
