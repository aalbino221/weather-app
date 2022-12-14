module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "import/prefer-default-export": "off",
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix']
  },
};
