module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'css',
  proseWrap: 'preserve',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 120,
        proseWrap: 'never',
      },
    },
    {
      files: ['*.json', '*.jsonc'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.css', '*.scss', '*.less'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
