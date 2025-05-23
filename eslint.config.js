import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';

export default tseslint.config(
  { ignores: ['node_modules/**', '.expo/**'] },
  {
    extends: [
      js.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.reactnative,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'unused-imports': unusedImports,
      react,
      'react-native': reactNative,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {},
        'react-native': {},
      },
      'import/ignore': ['react-native'],
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'warn',
      'react-native/no-raw-text': 'warn',
      'react-native/no-single-element-style-arrays': 'warn',

      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'type'],
          pathGroups: [
            {
              pattern: '*.css',
              group: 'type',
              position: 'after',
            },
          ],
          warnOnUnassignedImports: true,
        },
      ],
      'import/no-default-export': 'error',

      // Allow '_' prefixed variables to be unused
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    // Config files
    files: ['*.js', '*.cjs'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-default-export': 'off',
    },
  },
  eslintPluginPrettierRecommended,
);
