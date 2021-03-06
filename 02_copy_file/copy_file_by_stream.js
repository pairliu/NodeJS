var fs = require('fs');

var rs = fs.createReadStream('copy_file_by_stream.js');
var ws = fs.createWriteStream('c:\\copy_file_by_stream.js.cp');       // Same as Java. In code, \ needs to be escaped. If as input value, it doesn't. Use c:/... is also ok.

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