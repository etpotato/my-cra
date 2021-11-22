const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  plugins: [
    require('./plugins/ReactRefreshWebpackPlugin')(),
    require('./plugins/CleanWebpackPlugin')(),
    require('./plugins/ESLintWebpackPlugin')(),
    require('./plugins/StylelintPlugin')(),
    require('./plugins/HtmlWebpackPlugin')(),
    require('./plugins/MiniCssExtractPlugin')(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    port: 3000,
  },
  stats: 'minimal',
};
