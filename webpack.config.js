const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
	entry:{
		main:['./src/app.js'],
		vendor: [
	      'react-dom',
	      'react-redux',
	      'react-router',
	      'react',
	      'redux-thunk',
	      'redux',
	      'jquery'
	    ]
	},
	output:{
		path: path.resolve(__dirname, "dist"),
		filename: "./dist/[name].app-[hash].js"
	},
	module:{
		rules:[
			{	test: /\.less|css$/, 
				use: ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:['css-loader','less-loader'],
					publicPath:"/dist"
				})
			},
			{
			    test: /\.(js|jsx)$/,
			    exclude: /node_modules/,
			    use: ['babel-loader'],
			},
			{
			    test: /\.(eot|woff2|woff|ttf|svg)$/,
			    use: ['url-loader'],
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
		    name: 'vendor',
		    minChunks: Infinity,
		    filename: './dist/vendor-[hash].js',
		}),
		new HtmlWebpackPlugin({
			title: 'React Node Mongo',
			minify:{
				collapseWhitespace:true
			},
			hash:true,
			template: './src/index-template.html',
		}),
		new ExtractTextPlugin({
			filename:"./dist/style.css",
			disable:false,
			allChunks:true
		}),
		new webpack.ProvidePlugin({
	        'jQuery': 'jquery',
	        'window.jQuery': 'jquery',
	        'window.$': 'jquery',
    	}),
	],
	devServer:{
		contentBase: 'dist/',
		port:3000
	}
};