const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack')
const ASSET_PATH = process.env.ASSET_PATH || '/'
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname + '/dist'),
        publicPath: ASSET_PATH,
    },
    
    devServer: {
        port: 3001,
        historyApiFallback: true,        
    },
    
    plugins: [      
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.DefinePlugin({
          'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        })
    ],
    module: {
        rules: [
            
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
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
                test: /\.(woff|woff2|ttf|otf)$/,
                loader: 'file-loader',
                include: [/fonts/],
          
                options: {
                  name: '[hash].[ext]',
                  outputPath: 'css/',
                  publicPath: url => '../css/' + url
                }
              },
              
        ],
    },
 
 
 };
 