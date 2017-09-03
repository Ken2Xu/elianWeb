var path = require('path');
var webpack=require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'appBundle.js'
    }
    , module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
            , {
                loader: 'babel-loader', 
                exclude: /node_modules/,
                test: /\.js$/ ,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                },
            }
        ]
    }
    , plugins: [
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
          })
    ]
}