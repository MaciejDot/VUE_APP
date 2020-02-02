var proxy = require('http-proxy-middleware');
export default proxy({
                '^/api/**': {
                    target: 'https://localhost:44344',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            })