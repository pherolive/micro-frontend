const path = require("path");
// htmlwebpackplugin将所有react子应用的内容打包成一个以HTML为出口的内容
const HtmlWebpackPlugin = require("html-webpack-plugin");
// minicssextractplugin是作用在css的规则上的, 将所有css内容进行提取再引入
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    path: ["./index.js"],
  },
  module: {
    rules: [
      {
        test: /\.js(|x)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(c|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  optimization: {
    splitChunks: false,
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react15.js",
    library: "react15",
    libraryTarget: "umd",
    umdNamedDefine: true,
    publicPath: "http://localhost:9002/",
  },
  devServer: {
    // 配置允许跨域
    headers: { "Access-Control-Allow-Origin": "*" },
    // contentBase的作用是告诉在整体开发过程中我们当前所请求的资源去dist里面找
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9002,
    historyApiFallback: true,
    hot: true,
  },
};
