module.exports = {
	extends: ['@10up/eslint-config', '@10up/eslint-config/jest'],
	rules: {
		'import/no-dynamic-require': [0],
		'global-require': [0],
	},
	globals: {
		module: true,
		process: true,
	},
};