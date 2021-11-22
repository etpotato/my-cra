const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = () => new ESLintWebpackPlugin({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
});
