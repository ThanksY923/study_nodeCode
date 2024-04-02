const fs = require("fs");
const path = require("path");

// fs读取文件
function getFile() {
	// 同步方式
	const res1 = fs.readFileSync("./aaa.txt", { encoding: "utf-8" });
	console.log(res1);

	// 回调函数异步方式
	const res2 = fs.readFile("./aaa.txt", { encoding: "utf-8" }, (err, res) => {
		if (err) {
			console.log(error);
		} else {
			console.log(res);
		}
	});
	console.log("aaaaaa");

	// promise异步回调方式
	const res3 = fs.promises
		.readFile("./aaa.txt", { encoding: "utf-8" })
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		});
	console.log("bbbbbb");

	async function aaa() {
		const res1 = await fs.promises.readFile("./aaa.txt", { encoding: "utf-8" });
		console.log("cccccc");
		console.log(res1);
	}

	aaa();
}
// getFile()
// 文件描述符
function getFile2() {
	const fd = fs.open("./aaa.txt", (err, fd) => {
		if (err) {
			console.log(err);
		} else {
			console.log(fd);
		}
	});
}
getFile2();
