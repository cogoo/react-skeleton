//@ts-check
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => ({
	output: {
		chunkFilename: '[name].lazy-chunk.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							config: {
								ctx: { mode }
							}
						}
					}
				]
			}
		]
	},
	plugins: [new MiniCssExtractPlugin()]
});
