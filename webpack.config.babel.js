import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const IS_PROD = process.env.NODE_ENV === 'production';

export default {
  entry: './app/main.js',
  output: {
    filename: IS_PROD ? '[name].[chunkhash:8].js' : '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: IS_PROD ?
              ExtractTextWebpackPlugin.extract(['css-loader', 'sass-loader']) :
              ['vue-style-loader', 'css-loader', 'sass-loader']
          }
        }
      },
      {
        test: /\.css$/,
        use: IS_PROD ?
          ExtractTextWebpackPlugin.extract('css-loader') :
          ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: IS_PROD ?
          ExtractTextWebpackPlugin.extract(['css-loader', 'sass-loader']) :
          ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: IS_PROD ? '[name].[hash:8].[ext]' : '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    }),
    new ExtractTextWebpackPlugin('[name].[hash:8].css'),
    new CleanWebpackPlugin(['dist'])
  ],
  devtool: IS_PROD ? false : 'eval-source-map',
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),
    stats: 'minimal'
  }
};
