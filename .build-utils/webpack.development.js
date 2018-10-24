//@ts-check
module.exports = ({ mode }) => ({
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
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
	devServer: {
		historyApiFallback: true
	}
});
