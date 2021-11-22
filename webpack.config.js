// split config files - common, dev, prod
// extract plugin, rules in separate files
const path = require('path');
const css = require('./webpack/rules/css');
const script = require('./webpack/rules/script');
const assets = require('./webpack/rules/assets');

const isProd = process.env.NODE_ENV === 'production';
const config = isProd ? require('./webpack/prod') : require('./webpack/dev');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[hash][ext][query]',
  },
  module: {
    rules: [
      css,
      script,
      ...assets,
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  ...config,
};
