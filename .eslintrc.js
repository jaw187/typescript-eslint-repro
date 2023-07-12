/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@graphql-eslint'],
  root: true,
  overrides: [
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      extends: 'plugin:@graphql-eslint/schema-recommended',
    },
    {
      files: ['*.graphql'],
      extends: 'plugin:@graphql-eslint/schema-all',
      parserOptions: {
        schema: [
          '*.graphql',
        ],
      },
    },
  ]
};
