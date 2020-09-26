const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = () => {
    return {
        entry: "./src/index.tsx",
        devtool: "inline-source-map",
        externals: [nodeExternals()],
        target: "node", // to exclude built-in node modules like path
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
                    exclude: path.resolve(__dirname, "node_modules"),
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
