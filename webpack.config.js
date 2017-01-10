module.exports = {
    entry: './app.js',
    output: {
        path: 'build',
        filename: 'index.js',
        publicPath: '/build/'
    },
    devServer: {
        hot:true,
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                //解析js和vue的时候都需要加载eslint-loader，不然只会解析js，因为eslint只是对当前文件的语法进行检测，不会像babel一样先执行require，然后将文件引入后再解析。
                loaders: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.vue$/,
                //解析vue的时候也需要加载eslint-loader，不然会解析失败，因为eslint只是对当前文件的语法进行检测，不会像babel一样先执行require，然后将文件引入后再解析。
                loader: 'vue-loader!eslint-loader'
            }
        ]
    },
    eslint: {
        //eslint配置文件
        configFile: './.eslintrc'
    },
    resolve: {
        alias: {
            'plugins': __dirname + '/plugins',
            'vue': 'vue/dist/vue.js'
        },
        extensions: ['', '.js', '.vue']
    },
    devtool: 'source-map'
};
