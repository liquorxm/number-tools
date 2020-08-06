module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      modules: true
    },
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'prefer-const': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0
  },
}
