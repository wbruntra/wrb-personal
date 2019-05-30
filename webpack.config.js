var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build', 'js'),
    filename: 'bundle.js',
  },
};
