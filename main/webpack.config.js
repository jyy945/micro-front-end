const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: ['/node_modules/qiankun', path.resolve(__dirname, "src")],
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env"], "@babel/react"],
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
    devtool: "source-map",
    devServer: {
        port: "8090"
    }
};