module.exports = {
    // mode
    mode: 'development',
    // source map for debugging
    devtool: 'eval-source-map',
    // file paths
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    // server
    devServer: {
        contentBase: './public',
        historyApiFallback: true, // `true` for SPA that all jumps to index.html
        inline: true // auto refresh
    },
    // babel
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                    // options: { presets: [ "env" ] } => .babelrc file
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // 启用 css modules
                            localIdentName:
                                '[path][name]__[local]--[hash:base64:5]' // 制定 css 类名格式
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    }
};
