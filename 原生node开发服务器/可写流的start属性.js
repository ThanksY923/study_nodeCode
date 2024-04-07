const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme.txt", {
	// mac上面默认是追加 windows上面使用r+
	flags: "a+",
	start: 1,
});
writeStream.write("writeStream\n");
writeStream.close();
