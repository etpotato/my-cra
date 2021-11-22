module.exports = {
  mode: 'production',
  target: 'browserslist',
  plugins: [
    require('./plugins/CleanWebpackPlugin')(),
    require('./plugins/ESLintWebpackPlugin')(),
    require('./plugins/StylelintPlugin')(),
    require('./plugins/HtmlWebpackPlugin')(),
    require('./plugins/MiniCssExtractPlugin')(),
  ],
};
