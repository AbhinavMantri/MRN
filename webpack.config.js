module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/public",
        file: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
}
