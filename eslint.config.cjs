const nextConfig = require('eslint-config-next');

module.exports = [
  // ignore build and deps
  { ignores: ['.next/**', 'node_modules/**'] },
  ...nextConfig,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
