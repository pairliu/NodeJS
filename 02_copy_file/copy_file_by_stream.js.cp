var fs = require('fs');

var rs = fs.createReadStream('copy_file_by_stream.js');
var ws = fs.createWriteStream('copy_file_by_stream.js.cp');

rs.on('data', function(chunk) {
	if (ws.write(chunk) === false) {
		rs.pause();
	}
});

rs.on('end', function() {
	ws.end();
});

ws.on('drain', function() {
	rs.resume();
});