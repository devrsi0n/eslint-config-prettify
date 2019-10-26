// 'use strict';

module.exports = {
  extends: [
    'eslint-config-prettify-ts-base',
    'eslint-config-prettify-react',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {

  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": ["warn"]
      }
    }
  ]
};
