module.exports = [{
	entry: ['./app.scss', './app.js'],
	devServer: {
		overlay: true,
		clientLogLevel: 'info'
	},
	output: {
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
							includePaths: ['./node_modules']
						}
          }
        ]
      },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
					plugins: ['transform-object-assign']
				},
      }
    ]
	},
}];
