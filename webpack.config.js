const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

config = {
  entry: { 
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: 'http://localhost:8080/',
    filename: "index.js",
    pathinfo: false
  },
  devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    port: 9000,
    hot: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: false
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(s?)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
  ]
};

module.exports = (env, options) => {
  let isProduction = options.mode === "production";
  config.devtool = isProduction ? false : "source-map";

  if (isProduction)
    config.plugins = [
      ...config.plugins,
      new CopyWebpackPlugin({
        patterns: [
          { from: "./src/assets", to: "./build/assets" }
        ]
      })
    ];
  return config;
};
