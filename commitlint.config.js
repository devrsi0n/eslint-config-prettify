module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['all', 'base', 'react', 'ts-base', 'ts-react'],
    ],
  },
};
