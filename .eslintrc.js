/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.eslint.json']
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 'off'
    // 'react/display-name': 'off',
    // '@typescript-eslint/strict-boolean-expressions': 'off',
    // '@typescript-eslint/restrict-template-expressions': 'off',
    // '@typescript-eslint/restrict-plus-operands': 'off',
    // '@typescript-eslint/no-misused-promises': 'off',
    // '@typescript-eslint/no-unused-vars': 'warn'
  }
}
