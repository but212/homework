module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',

  htmlWhitespaceSensitivity: 'css',
  proseWrap: 'preserve',
  singleAttributePerLine: false,
  jsxSingleQuote: true,
  jsxBracketSameLine: false,

  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 100,
        proseWrap: 'always',
        singleQuote: true,
        tabWidth: 2,
      },
    },

    {
      files: ['*.json', '*.jsonc'],
      options: {
        singleQuote: false,
        trailingComma: 'none',
        parser: 'json',
      },
    },

    {
      files: ['*.css', '*.scss', '*.less'],
      options: {
        singleQuote: false,
        printWidth: 100,
        tabWidth: 2,
      },
    },

    {
      files: '*.html',
      options: {
        printWidth: 100,
        htmlWhitespaceSensitivity: 'css',
      },
    },

    {
      files: ['*.yaml', '*.yml'],
      options: {
        singleQuote: true,
        tabWidth: 2,
      },
    },
  ],
};
