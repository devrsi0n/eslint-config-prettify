# eslint-config-prettify

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

A prettify eslint config with prettier include. Support for React/TypeScript/Vailla JavaScript.

This repo container 4 npm packages.

- `eslint-config-prettify-base` for vanilla JavaScript project
- `eslint-config-prettify-react` for React JavaScript project
- `eslint-config-prettify-ts-base` for vanilla TypeScript project
- `eslint-config-prettify-ts-react` for React TypeScript project

## Quick start

```bash
yarn add eslint-config-prettify-base
# Or using npm if you like
npm install --save-dev eslint-config-prettify-base
```

Upgrade your ESLint config

```json
// .eslintrc
{
  "root": true,
  "extends": ["eslint-config-prettify-base"]
}
```

## Configuration

`eslint-config-prettify-ts-react` and `eslint-config-prettify-ts-base` using command executing directory to detect `tsconfig.json`(for TypeScript path alias), try below configuration if you meet `Unable to resolve path to module ‘xxx’` error.

### tsconfig path

```json
{
  "extends": ["eslint-config-prettify-base"],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      "typescript": {
        "alwaysTryTypes": true // always try to resolve types under `<root/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      "typescript": {
        "directory": "./path/to/folder"
      },

      // Multiple tsconfigs (Useful for monorepos)

      // use a glob pattern
      "typescript": {
        "directory": "./packages/*/tsconfig.json"
      },

      // use an array
      "typescript": {
        "directory": [
          "./packages/module-a/tsconfig.json",
          "./packages/module-b/tsconfig.json"
        ]
      },
  }
}
```
