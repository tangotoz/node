const express = require('express');
const app = express();
const port = 3000;

/**
 * 使用 JSON 中间件
 */
app.use(express.json());
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

/**
 * 创建内容
 */
app.post('/posts', (req, resp) => {
    // 获取请求里的数据
    const { content } = req.body;

    // 设置响应头部数据
    resp.setHeader('Sing-Alone', 'How I wonder what you are');

    // 设置相应状态码
    resp.status(201);

    // 作出响应
    resp.send({
        message: `成功创建了内容: ${content}`
    });
});