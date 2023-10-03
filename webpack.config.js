const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with the path to your React entry file
  output: {
    path: path.resolve(__dirname, 'public/js'), // Replace with the desired output directory
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
