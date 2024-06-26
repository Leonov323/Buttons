module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:prettier/recommended', 'eslint:recommended', 'plugin:react/recommended'],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-undef': 0,
    'max-len': [
      1,
      120,
      {
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};