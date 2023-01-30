let proxyObj = {};
//WebSocket请求转发
proxyObj = {
};
//HTTP请求转发
proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathReWrite: {
        '^/': '/'
    }
}
module.exports = {
    //vue项目服务和端口配置
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    }
}
