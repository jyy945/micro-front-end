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
            }
        ]
    },
    plugins: [
        new VueLorderPlugin(),
        new HtmlWebpackPlugin()
    ],
    devServer: {
        port: "9001"
    },
}