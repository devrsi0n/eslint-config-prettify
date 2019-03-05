'use strict';

module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    '@devrsi0n/eslint-config-base',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  rules: {
    strict: 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 'off'
  },
};
