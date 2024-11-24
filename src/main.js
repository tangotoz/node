const http = require('http');

const server = http.createServer((req, resp) => {
    const data = {
        id: 1,
        title: '关山月',
        content: '明月出天山, 苍茫云海间'
    };

    const jsonData = JSON.stringify(data);

    resp.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    resp.write(jsonData);

    resp.end();
});

server.listen(3000, () => {
    console.log('服务已启动');
})