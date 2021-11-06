import path from "path";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

export default {
  mode: mode,
  target: target,
  module: {
    rules: [
      {
        test: /\.s([ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(path.resolve(), "dist"),
    },
    hot: true,
    port: 3000,
  },
};
