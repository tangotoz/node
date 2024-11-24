const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('服务已启动!');
});

// 定义一个 GET 路由
app.get('/', (req, resp) => {
    resp.send('Hello Express!');
});

const data = [
    {
        id: 1,
        title: '关山月',
        content: '明月出天山, 苍茫云海间'
    },
    {
        id: 2,
        title: '望岳',
        content: '会当凌绝顶, 一览众山小'
    },
    {
        id: 3,
        title: '忆江南',
        content: '日出江花红胜火, 春来江水绿如蓝'
    }
];

app.get('/posts', (req, resp) => {
    resp.send(data)
});

app.get('/posts/:postId', (req, resp) => {

    // 获取内容id
    const { postId } = req.params;
    // 查找对应的文章
    const post = data.filter(item => item.id == postId);
    // 作出响应
    resp.send(post[0]);
});