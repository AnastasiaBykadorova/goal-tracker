module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    '.eslintrc.common.js',
    'temoncher/base',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser', // the typescript-parser for eslint, instead of tslint
    sourceType: 'module', // allow the use of imports statements
    ecmaVersion: 2018, // allow the parsing of modern ecmascript
    project: './tsconfig.json',
  },
  rules: {
    'no-shadow': 0,
    'unicorn/filename-case': 0, // conflicts with components naming
    'id-denylist': 0, // conflicts with "data" name
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/attributes-order': [
      2,
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'vue/multiline-html-element-content-newline': 1,

    '@typescript-eslint/array-type': 1,
    '@typescript-eslint/consistent-indexed-object-style': [1, 'record'],
    '@typescript-eslint/consistent-type-assertions': [
      2,
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      1,
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 2,
    '@typescript-eslint/method-signature-style': [2, 'property'],
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        prefix: ['I'],
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-base-to-string': 1,
    '@typescript-eslint/no-confusing-non-null-assertion': 1,
    '@typescript-eslint/no-confusing-void-expression': 1,
    '@typescript-eslint/no-dynamic-delete': 1,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-implicit-any-catch': 2,
    '@typescript-eslint/no-invalid-void-type': 2,
    '@typescript-eslint/no-parameter-properties': [
      2,
      {
        allows: ['private readonly'],
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': 1,
    '@typescript-eslint/no-unnecessary-qualifier': 1,
    '@typescript-eslint/no-unnecessary-type-constraint': 1,
    '@typescript-eslint/prefer-for-of': 1,
    '@typescript-eslint/prefer-reduce-type-parameter': 1,
    '@typescript-eslint/prefer-string-starts-ends-with': 1,
    '@typescript-eslint/promise-function-async': 1,
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/type-annotation-spacing': 1,
    '@typescript-eslint/default-param-last': 2,

    'no-duplicate-imports': 0,
    '@typescript-eslint/no-duplicate-imports': 2,

    'no-invalid-this': 0,
    '@typescript-eslint/no-invalid-this': 2,

    'no-loss-of-precision': 0,
    '@typescript-eslint/no-loss-of-precision': 2,

    'no-return-await': 0,
    '@typescript-eslint/return-await': 2,

    // disable import unnecessary rules
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 1,
      },
    },
  ],
};
