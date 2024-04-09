const http = require("http");
// 创建http服务器
const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === "/login") {
		if (method === "POST") {
			res.end("登录成功~");
		} else {
			res.end("不支持的请求方式, 请检测你的请求方式~");
		}
	} else if (url === "/products") {
		res.end("商品列表~");
	} else if (url === "/lyric") {
		res.end("天空好想下雨, 我好想住你隔壁!");
	}
});
// 开启对应服务器，监听端口
server.listen(8000, () => {
	console.log("服务器启动成功");
});
