'use strict';

module.exports = [{
	entry: ['./app.scss', './app.js'],
	output: {
		// This is necessary for webpack to compile
		// But we never use style-bundle.js
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'bundle.css',
						},
          },
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							// Prefer Dart Sass
							implementation: require('sass'),
							webpackImporter: false,
              					sassOptions: {
                					includePaths: ['node_modules'],
								},
          },
      }
    ]},
]},
}];
