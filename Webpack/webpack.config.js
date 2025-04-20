const path = require('path');

module.exports = {
  mode: 'development',
  entry: './task_0/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};