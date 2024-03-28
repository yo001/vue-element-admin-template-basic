/* eslint-env node */
module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		'no-undef': 'off',
		'semi': ['error', 'never'],
		'quotes': ['error', 'single'],
		'indent': ['error', 'tab'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1, 'maxBOF': 0 }],
		'vue/attributes-order': 'error',
		'vue/html-self-closing': ['error', {
			'html': {
				'void': 'always',
				'normal': 'never',
				'component': 'always'
			},
			'svg': 'always',
			'math': 'always'
		}],
		'vue/html-indent': ['error', 2, {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': []
		}],
		'vue/max-attributes-per-line': ['error', {
			'singleline': 3,
			'multiline': {
				'max': 1,
				'allowFirstLine': false
			}
		}]
	},
}
