// 'use strict';

const reactConfig = require('../react');
const filteredConfig = reactConfig.extends.filter((item) => item !== 'eslint-config-prettify-base');

module.exports = {
  extends: [...filteredConfig, 'eslint-config-prettify-ts-base'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx', '.js'] }],
    // Turn off prop-types, using TypeScript type instead
    'react/prop-types': ['off', {}],
  },
  // overrides: [
  //   {
  //     // enable the rule specifically for TypeScript files
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       '@typescript-eslint/explicit-function-return-type': ['warn'],
  //     },
  //   },
  // ],
};
