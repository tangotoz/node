const http = require('http');

const server = http.createServer((req, resp) => {
    resp.write('hello ~');
    resp.end();
});

server.listen(3000, () => {
    console.log('服务已启动');
})