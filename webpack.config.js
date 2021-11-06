import path from "path";

let mode = "development";

if (process.env.NODE_ENV === "production") mode = "production";

export default {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(path.resolve(), "dist"),
    },
    hot: true,
    port: 3000,
  },
};
