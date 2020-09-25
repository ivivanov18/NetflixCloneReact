const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = () => {
    return {
        entry: "./src/index.tsx",
        devtool: "inline-source-map",
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.[hash].js",
            chunkFilename: "bundle.[hash].js",
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "awesome-typescript-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    loader: ["style-loader", "css-loader"],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + "/src/template.html",
                filename: "index.html",
                inject: "body",
            }),
            new Dotenv(),
        ],
    };
};
