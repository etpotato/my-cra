module.exports = {
  test: /\.[jt]sx?$/i,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};
