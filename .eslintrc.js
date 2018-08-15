// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  globals: {
    "_": true,
    "AMap": true,
  },
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.config.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never',
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ['error', 'never'],
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'no-return-assign': [0],
    'no-param-reassign': 0,
    'consistent-return': 0,
    'arrow-parens': 0,
    'space-before-function-paren': 0,
    'max-len': 0,
    'no-console': 0,
    'no-unused-expressions': 0,
    'import/first': 0,
    'import/prefer-default-export': 0,
    'prefer-promise-reject-errors': 0,
    "object-curly-newline": 0,
    "no-restricted-globals": ["error", "event", "fdescribe"]
  }
}
