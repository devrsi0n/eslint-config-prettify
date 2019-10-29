'use strict';

const localRules = [
  './rules/react.js',
  './rules/react-hooks.js',
  './rules/react-a11y.js',
].map(require.resolve);

module.exports = {
  extends: [...localRules, 'eslint-config-prettify-base', 'prettier/react'],
};
