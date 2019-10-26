'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-prettify-base',
    'eslint-config-prettier/react',
    'plugin:mdx/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react-hooks'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 'off'
  },
};
