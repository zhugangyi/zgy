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
            '/Pics/*': {
                target: 'http://localhost:8900/',
                secure: false,
                changeOrigin: true
            },
            '/Area/*': {
                target: 'http://localhost:8900/',
                secure: false,
                changeOrigin: true
            },
            '/Custom/*': {
                target: 'http://localhost:8900/',
                secure: false,
                changeOrigin: true
            },
            '/*': {
                target: 'http://localhost:8900/',
                secure: false,
                changeOrigin: true
            },            
        }
    },

}