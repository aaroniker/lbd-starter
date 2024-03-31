module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'config/*.pem'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'eslint-plugin-react',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-import',
    'eslint-plugin-react-hooks',
    'eslint-plugin-react-perf',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // ESLint core rules
    'arrow-body-style': 'off',
    'arrow-parens': ['off', 'always'],
    'brace-style': ['off', 'off'],
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'no-unused-vars': 'off',
    quotes: ['error', 'single'],

    // @typescript-eslint rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    // eslint-plugin-react rules
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-key': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-bind': 'off',
    'react/jsx-tag-spacing': ['off', { afterOpening: 'allow', closingSlash: 'allow' }],
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',

    // eslint-plugin-react-hooks rules
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    // eslint-plugin-react-perf rules
    'react-perf/jsx-no-new-object-as-prop': 'error',
    'react-perf/jsx-no-new-function-as-prop': 'error',

    // eslint-plugin-prefer-arrow rules
    'prefer-arrow/prefer-arrow-functions': 'error',

    // eslint-plugin-import rules
    'import/no-extraneous-dependencies': 'error',
    'import/no-internal-modules': 'off',
    'import/no-unassigned-import': ['error', { allow: ['**/*.css', 'dotenv/config'] }],
    'import/order': 'error',

    // Prettier plugin rules
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
