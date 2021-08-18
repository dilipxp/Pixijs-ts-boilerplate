const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.ts",

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /node_modules/
            },

            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },

            

            {
                test: /\.(webp|png|jpe?g|gif|svg|mp3|ogg|mp4|weba|woff2?|eot|ttf|otf|mp3)$/,
                loader: "file-loader",
                options: {
                    name: '[path][name].[ext]',
                    context: 'public'
                },
                include: [
                    path.resolve(__dirname, "src/assets/")
                ],
                exclude: /node_modules/
            },

           

            
        ]
    },


    devServer: {
        contentBase: './dist',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
    },

    resolve: {
        extensions: ['.ts', '.js', '.scss', '.json', '.html'],
    },

    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },

    plugins: [

        // main page
        new HTMLWebpackPlugin(
            {
                template: './src/index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                  }
            }
        ),

        
        // enable if when using assets
        new CopyPlugin({
            patterns: [{
                from: './src/assets/',
                to: './assets'
            }]
        }),



    ]
}