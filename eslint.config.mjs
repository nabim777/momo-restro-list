
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      'dist/**'
    ]
  },
  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    },

    rules: {
      // Variables
      'no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'error',

      // Code quality
      'eqeqeq': ['error', 'always'],
      'curly': 'error',
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',

      // Maintainability
      'no-console': 'warn',
      'complexity': ['warn', 10],
      'max-depth': ['warn', 3],
      'max-lines-per-function': ['warn', {
        max: 50,
        skipBlankLines: true,
        skipComments: true
      }]
    }
  }
];

