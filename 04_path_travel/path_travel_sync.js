var fs = require('fs');
var path = require('path');

function print(name) {
	console.log(name);
}

function travel(dir, callback) {      
	fs.readdirSync(dir).forEach(function(file) {
		var fullpath = path.join(dir, file);
		
		if (fs.statSync(fullpath).isDirectory()) {
			travel(fullpath, callback);
		} else {
			callback(fullpath);
		}
	});
}

travel(process.argv[2], function(name) {
	console.log(name);
});

// travel(process.argv[2], print);     // In code convention perspective, which way is better?

