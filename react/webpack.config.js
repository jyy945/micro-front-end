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
        port: "8090"
    }
};