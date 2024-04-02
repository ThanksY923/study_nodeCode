const fs = require("fs");

// 创建一个buffer
// var buf = new Buffer("hello");
// console.log(buf);

var buf2 = Buffer.from("hello");
console.log(buf2);

console.log(buf2.toString());

var buf3 = Buffer.from("why", "utf16le");
console.log(buf3);
console.log(buf3.toString());

// 创建一个长度的Buffer 传参为number
var buf4 = Buffer.alloc(22);
buf4.write("hello,superyaochaofeng");
console.log(buf4.toString());

//读取buffer
fs.readFile("./aaa.txt", (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
		console.log(data.toString());
	}
});

fs.readFile("./photo.jpg", (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data.length);
		// console.log(data.toString());
	}
});
