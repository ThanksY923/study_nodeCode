const fs = require("fs");

// fs.writeFile("./bbb.txt", "hello world", { encoding: "utf-8" }, (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });

//创建写入流
// const ws = fs.createWriteStream("./ccc.txt", {
// 	flags: "a+",
// });
// ws.write("hello");

// 文件拷贝流的操作
// 方法一 一次性读取和写入文件
fs.readFile("./aaa.txt", (err, data) => {
	if (err) {
		console.log(err);
	} else {
		fs.writeFile("./eeee.txt", data, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				console.log("拷贝成功");
			}
		});
	}
});

// 方法二 创建可读流和可写流
const rs = fs.createReadStream("./aaa.txt");
const ws = fs.createWriteStream("./f.txt");
rs.pipe(ws);
rs.on("data", chunk => {
	console.log(chunk);
});
