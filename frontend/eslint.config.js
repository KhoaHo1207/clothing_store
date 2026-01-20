import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignore build
  globalIgnores(['dist']),

  // JS recommended
  js.configs.recommended,

  // TypeScript recommended (flat)
  ...tseslint.configs.recommended,

  // React Hooks
  reactHooks.configs.flat.recommended,

  // Vite React Refresh
  reactRefresh.configs.vite,

  // 🚫 Tắt toàn bộ rule xung đột với Prettier
  prettier,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // React 17+ / Vite không cần import React
      'react/react-in-jsx-scope': 'off',
    },
  },
])
