const path = require("path");
const VueLorderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
                test: [/\.vue$/],
                use: ["vue-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    plugins: [
        new VueLorderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html"
        })
    ],
    devtool: "source-map",
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
        port: "8092",
    },
}