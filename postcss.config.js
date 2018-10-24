//@ts-check
const modeConfig = env => require(`./.build-utils/postcss.${env}`)(env);
const postCssMerge = require('webpack-merge');

module.exports = ({ options }) => {
	return postCssMerge({}, modeConfig(options.mode));
};
