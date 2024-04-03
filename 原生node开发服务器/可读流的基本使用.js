const fs = require("fs");

// 一次性读取
// 缺点：如果文件很大，一次性读取会很慢
// 缺点：一次性读取会占用更多的内存
// 缺点：无法监听流事件，不知道读取的进度
// fs.readFile("./aaa.txt", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });

// 创建可读流
// start 和 end 可以指定读取文件的范围
// highwaterMark：默认是16k，当数据量超过这个值时，就会触发drain事件
// drain：当可读流中的数据被消耗完时触发
const rs = fs.createReadStream("./aaa.txt", {
	start: 0,
	end: 5,
	highWaterMark: 3,
});

rs.on("data", res => {
	console.log(res.toString());
	// 暂停
	// rs.pause();

	// setTimeout(() => {
	// 	// 恢复
	// 	rs.resume();
	// }, 2000);
});
// 其他事件
rs.on("open", fd => {
	console.log("open", fd);
});
// 结束
rs.on("end", () => {
	console.log("end");
});
// 关闭
rs.on("close", () => {
	console.log("close");
});
// 报错
rs.on("error", err => {
	console.log(err);
});
