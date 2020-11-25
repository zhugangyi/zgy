// const { resolve } = require("core-js/fn/promise");

module.exports = {

    // publicPath : process.env.NODE_ENV === 'production' ? '/zgy/' : '/',
    
    configureWebpack: {
        devtool: 'source-map'
      },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8880/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api':'/'
                }

            },
            '/Assets/*': {
                target: 'http://localhost:8900/',
                secure: false,
                changeOrigin: true
            },
            '/AssetType/*': {
                target: 'http://localhost:8900/',
                secure: false,
                changeOrigin: true                
            },
            '/Cjd/*': {
                target: 'http://localhost:8880/',
                secure: false,
                changeOrigin: true
            },
            '/Flsg/*': {
                target: 'http://localhost:8880/',
                secure: false,
                changeOrigin: true
            },
            '/OnlineStatus/*': {
                target: 'http://localhost:8880/',
                secure: false,
                changeOrigin: true
            }
        }
    },

}