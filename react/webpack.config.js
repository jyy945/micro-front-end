const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const {name} = require("./package.json");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
        library: `${name}-[name]`,
        libraryTarget: "umd",
        chunkLoadingGlobal: `webpackJsonp_${name}`,
        globalObject: "window"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env",{"modules": "commonjs"}], "@babel/react"],
                        plugins: ["@babel/transform-runtime"],
                    }
                }]
            },
            {
                test: /\.scss$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // 启用css modules
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            // 启用css modules
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
      new htmlWebpackPlugin({
          template: path.resolve(__dirname, "./public/index.html"),
          filename: "index.html"
      })
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        clientLogLevel:'warning',
        disableHostCheck:true,
        historyApiFallback:true,
        compress:true,
        overlay:{
            warnings:false,
            errors:true
        },
        port: "8091"
    }
};