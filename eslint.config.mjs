// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,
  ignores: [
    'node_modules/*',
    '/dist/**',
  ],
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier',
  },
  rules: {
    'no-console': 'warn',
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: 1,
    }],
  },
})
