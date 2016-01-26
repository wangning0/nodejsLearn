var fs = require('fs');

var ws = fs.createWriteStream('./src.txt');
writeOneMillion(ws,'哈哈哈','utf8',function(){
	console.log('本次结束');
})

function writeOneMillion(ws, data, encoding, callback) {
	var i = 100000;
	write();

	function write() {
		do {
			var ok = true;
			i -= 1;
			if (i == 0) {
				ws.write(data, encoding, callback);
			} else {
				ok = ws.write(data, encoding);
				console.log(ok);
			}
		} while (i > 0 && ok)

		if (i > 0) {
			console.log('drain');
			ws.once('drain', write)
		}
	}
}