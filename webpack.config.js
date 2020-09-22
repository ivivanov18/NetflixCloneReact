const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[hash].js",
        chunkFilename: "bundle.[hash].js",
    },
    module : {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/template.html",
            filename: "index.html",
            inject: "body",
        })
    ]
}
