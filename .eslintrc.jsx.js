module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['prettier', 'import', 'node', 'flowtype'],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    'react/forbid-prop-types': 'off',
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
