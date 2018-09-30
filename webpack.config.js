const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: './src/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'styles/[name].css' : 'styles/[name].[hash].css',
      chunkFilename: devMode ? 'styles/[id].css' : 'styles/[id].[hash].css',
    }),
    new ManifestPlugin({
      seed: {
        "name": "休假去哪裡",
        "short_name": "休假去哪裡",
        "start_url": ".",
        "theme_color": "#2cc3ff",
        "display": "standalone",
        "background_color": "#2cc3ff",
        "description": "休假去哪裡，台灣好景點",
        "icons": [
          {
            "src": "/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          }
        ],
        "related_applications": [
          {
            "platform": "web"
          }
        ],
        "orientation": "portrait"
      }
    })
  ],
  module: {
    rules: [
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
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};