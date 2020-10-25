module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
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
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': [
      2,
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: [
          'builtin',
        ],
      },
    ],
    'no-var': 2,
    'no-new': 0,
    'no-useless-constructor': 0,
    'no-return-assign': 0,
    'no-duplicate-imports': 2,
    'object-curly-newline': [
      1,
      {
        consistent: true,
      },
    ],
    'linebreak-style': 0,
    'lines-between-class-members': 0,
    camelcase: 0,
    semi: [
      2,
      'always',
    ],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline', // 'always-' conflicts with multiline webpack dynamic imports
      },
    ],
    'no-multiple-empty-lines': [
      1,
      {
        max: 1,
      },
    ],
    'eol-last': [
      1,
      'always',
    ],
    'padding-line-between-statements': [
      1,
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'if',
          'try',
          'class',
          'export',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'if',
          'try',
          'class',
          'export',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var',
          'export',
        ],
        next: [
          'const',
          'let',
          'var',
          'export',
        ],
      },
    ],
    'block-spacing': 1,
    'comma-spacing': [
      1,
      {
        before: false,
        after: true,
      },
    ],
    'func-call-spacing': [
      1,
      'never',
    ],
    'newline-before-return': 1,
    'object-curly-spacing': [
      1,
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    'padded-blocks': [
      1,
      'never',
    ],
    'max-len': [
      1,
      {
        code: 120,
      },
    ],
  },
};
