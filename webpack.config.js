const defaultConfig = require('@10up/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	output: {
        ...defaultConfig.output,
        environment: {
            arrowFunction: false,
        },
    },
};
