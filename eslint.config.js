import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  { ignores: ['dist'] },
  js.configs.recommended,
  reactHooks.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // capitalised names only used in JSX look unused to eslint
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    // node files
    files: ['vite.config.js', 'eslint.config.js', 'scripts/**/*.mjs'],
    languageOptions: { globals: globals.node },
  },
];
