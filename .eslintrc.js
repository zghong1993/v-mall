module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  globals: {
    _: true,
    AMap: true,
  },
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'never'],
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'no-return-assign': [0],
    'no-param-reassign': 0,
    'consistent-return': 0,
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    'max-len': 0,
    'no-unused-expressions': 0,
    'no-lonely-if': 0,
    'import/no-mutable-exports': 0,
    'import/first': 0,
    'prefer-promise-reject-errors': 0,
    'object-curly-newline': 0,
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'import/prefer-default-export': 0,
    'vue/no-use-v-if-with-v-for': ['error', {
      allowUsingIterationVar: true,
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
