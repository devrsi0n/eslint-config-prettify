'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    '@devrsi0n/eslint-config-base',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  'plugins': [
    'react-hooks'
  ],
  rules: {
    strict: 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 'off'
  },
};
