const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports =
{
    entry:
    [
        "./sass/app.scss",
    ],
    output:
    {
        filename: "./styles/app.css",
        path: path.join(__dirname, "./")
    },
    module:
    {
        rules:
        [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                {
                    use:
                    [
                        {
                            loader: "css-loader",
                            options: { minimize: true }
                        },
                        {
                            loader: "postcss-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            }
        ]
    },
    plugins:
    [
        new ExtractTextPlugin(
        {
            filename: "./styles/app.css"
        })
    ]
};
