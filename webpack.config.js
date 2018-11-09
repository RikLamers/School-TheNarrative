const webpack = require('webpack');
const ProvidePlugin = require('webpack').ProvidePlugin;
const path = require('path');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssReporter = require('postcss-reporter');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
	filename: './css/main.css'
});

const scssProcessors = [postcssReporter({ clearReportedMessages: true })];

const config = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		app: './index.js'
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: './js/[name].bundle.js'
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
				include: /src/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(css|scss)$/,
				include: [path.resolve(__dirname, 'src')],
				use: extractPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								minimize: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins() {
									return [
										autoprefixer(
											'last 3 versions',
											'> 5%',
											'iOS >= 8',
											'IE 9'
										)
									];
								}
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			},
			{},
			{
				test: /\.(gif|png|jpe?g)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './img/',
							publicPath: './../img/',
							useRelativePaths: true
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						}
					}
				]
			},
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				exclude: /img/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './fonts/',
							publicPath: '../fonts/'
						}
					}
				]
			},
			{
				test: /\.svg$/,
				exclude: /fonts/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: './img/',
						publicPath: '../img/'
					}
				}
			}
		]
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin(),
		new CleanWebpackPlugin(['public']),
		new FaviconsWebpackPlugin({
			logo: './assets/favicons/logo.png',
			prefix: 'favicons/'
		}),
		new HtmlWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './views/game/intro.html'
		}),
		new CopyWebpackPlugin([
			{
				from: './assets/js/vendors/modernizr-custom.js',
				to: './js/vendors/'
			},
			{
				from: './assets/js/vendors/detectizr.min.js',
				to: './js/vendors/'
			},
			{
				from: './assets/img/',
				to: './img/'
			},
            {
                from: './assets/sounds/',
                to: './sounds/'
            }
		]),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors'
		}),
		new ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'windows.jQuery': 'jquery'
		}),
		extractPlugin
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		compress: true,
		port: 3000,
		quiet: true,
		stats: 'errors-only',
		open: true
	},
	devtool: 'inline-source-map'
};
module.exports = config;
