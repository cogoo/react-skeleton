const CompressionWebpackPlugin = require('compression-webpack-plugin');
const compression = () => ({
	plugins: [new CompressionWebpackPlugin()]
});

module.exports = compression;
