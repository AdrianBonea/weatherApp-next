module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },

  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],

  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/default-props-match-prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'import/no-unresolved': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.tsx', '**/*.test.ts'] },
    ],
  },
};
