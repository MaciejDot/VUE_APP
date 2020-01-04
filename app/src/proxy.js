module.exports = {
        dev: {
            proxyTable: {
                'https://localhost:44344': {
                    target: '/api',
                    changeOrigin: true,
                    pathRewrite: {
                        '^https://localhost:44344': ''
                    }
                }
            }
        }
    }