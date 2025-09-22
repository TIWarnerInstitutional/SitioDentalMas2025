import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "public/**/*.svg",
      ".DS_Store",
      ".next/types/**",
      ".next/static/**",
    ],
    // Avoid enabling type-aware linting for non-TypeScript files (prevents parsing errors
    // for config files and generated artifacts). Enable project-aware rules only for
    // TypeScript source files via a files-specific override below.
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
    rules: {
      '@next/next/no-img-element': 'off'
    }
  },
  // Apply type-aware parser options and TypeScript-specific rules only to TS/TSX files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
    }
  }
];

export default eslintConfig;
