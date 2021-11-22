module.exports = [
  {
    test: /\.(png|svg|jpe?g|gif|webp)$/i,
    type: 'asset',
    generator: {
      filename: 'img/[hash][ext][query]',
    },
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[base]',
    },
  },
];
