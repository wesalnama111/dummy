const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss)/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    // path where the images will be saved
                    name: 'assets/img/[name].[ext]'
                  }
                },
                {
                  loader: 'image-webpack-loader',
                  options: {
                    mozjpeg: {
                      quality: 65
                    },
                    pngquant:{
                      quality: "10-20",
                      speed: 4
                    },
                    svgo:{
                      plugins: [
                        {
                          removeViewBox: false
                        },
                        {
                          removeEmptyAttrs: false
                        }
                      ]
                    },
                    gifsicle: {
                      optimizationLevel: 7,
                      interlaced: false
                    },
                    optipng: {
                      optimizationLevel: 7,
                      interlaced: false
                    }
                  }
                }
              ]
            }


        ]
    },
    plugins: [
     new HtmlWebpackPlugin({
         template: './src/index.html'
     })
    ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}