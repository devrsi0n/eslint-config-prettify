// 'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
    'eslint-config-prettier/babel',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    'shared-node-browser': true,
    jquery: true,
    es2020: true,
    worker: true,
    jest: true,
    mocha: true,
  },
  plugins: ['jest', 'prettier', 'babel'],
  rules: {
    strict: 'off',
    'no-plusplus': 'off',

    'babel/new-cap': 'warn',
    'babel/camelcase': 'warn',
    'babel/no-invalid-this': 'warn',
    'babel/object-curly-spacing': 'off', // Conflict with prettier
    'babel/quotes': 'off', // Conflict with prettier
    'babel/semi': 'off',  // Conflict with prettier
    'babel/no-unused-expressions': 'warn',
    'babel/valid-typeof': 'warn',

    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
