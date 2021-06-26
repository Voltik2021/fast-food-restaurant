const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname + '/dist'),
        publicPath: 'auto'
    },
    
    devServer: {
        port: 3001,
        historyApiFallback: true,
        contentBase: path.join(__dirname, './public'),
    },
    
    plugins: [      
        new HtmlWebpackPlugin({
            template: 'dist/index.html'
        }),
    ],
    module: {
        rules: [
            
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
            },
            {
                test: /\.(woff|woff2|ttf|otf)$/,
                loader: 'file-loader',
                include: [/fonts/],
          
                options: {
                  name: '[hash].[ext]',
                  outputPath: 'css/',
                  publicPath: url => '../css/' + url
                }
              },
              {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000
                    }
                  }
                ]
              }
        ],
    },
 
 
 };
 