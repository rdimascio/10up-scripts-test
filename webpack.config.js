const defaultConfig = require('@10up/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	target: ['web', 'es5'],
};
