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
            }
        ]
    },
    plugins: [
      new htmlWebpackPlugin({
          template: path.resolve(__dirname, "./src/index.html"),
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