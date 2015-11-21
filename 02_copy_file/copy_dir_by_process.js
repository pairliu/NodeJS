var childProcess = require('child_process');
var util = require('util');

function copyDir(src, dest) {
	//var cmd = util.format('cp -r %s/* %s', src, dest);  // command under linux
	var cmd = util.format('xcopy %s %s /S', src, dest);    // command under windows
	childProcess.exec(cmd, function callback(err) {
		if (err) {
			console.log('error');
		} else {
			console.log('done');
		}
	});
}

copyDir(process.argv[2], process.argv[3]);

