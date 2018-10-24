const path = require('path');
const modeConfig = ({ mode }) => require(`./.build-utils/webpack.${mode}`)({ mode });
const loadPresets = env => require('./.build-utils/load-presets')(env);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const SizePlugin = require('size-plugin');
const webpack = require('webpack');

module.exports = ({ mode = 'production', presets = [] }) => {
	return webpackMerge(
		{
			mode: mode,
			entry: './src/index.js',
			output: {
				publicPath: '/',
				filename: 'bundle.js',
				path: path.resolve(__dirname, 'public')
			},
			module: {
				rules: [
					{
						enforce: 'pre',
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'eslint-loader'
					},
					{
						test: /\.js$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env', '@babel/preset-react']
							}
						}
					}
				]
			},
			plugins: [
				new webpack.ProgressPlugin(),
				new HtmlWebpackPlugin({
					template: './src/index.html'
				}),
				new SizePlugin()
			]
		},
		modeConfig({ mode }),
		loadPresets({ presets })
	);
};
