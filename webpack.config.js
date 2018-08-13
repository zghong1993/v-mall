const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  output: {
    filename: "[name].bundle.js",//输出文件名，[name]表示入口文件js名
    path: path.join(__dirname, "dist")//输出文件路径
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: { // 创建 import/require 的别名
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'] // 编译顺序从右往左
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // 图片小于10000字节时以base64的方式引用
        },
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {  // 抽离自己写的公共代码
          chunks: "initial",
          name: "common", // 打包后的文件名，任意命名
          minChunks: 2,//最小引用2次
          minSize: 0 // 只要超出0字节就生成一个新包
        },
        vendor: {   // 抽离第三方插件
          test: /node_modules/,   // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor',  // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10
        },
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), //传入数组,指定要删除的目录
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: "./index.html", //以/src目录下index.html文件为模板生成dist/index.html文件
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    inline: true,//打包后加入一个websocket客户端
    hot: true,//热加载
    contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
    host: 'localhost',//主机地址
    port: 9090,//端口号
    historyApiFallback: true,
    proxy: {
      'http://localhost:9090/api/': {
        target: 'https://m.idf66.com',
        changeOrigin: true,
        pathRewrite: {},
        cookieDomainRewrite: 'localhost',
      },
    },
  },
}
