var http = require('http');

http.createServer(function(req, resp) {
	var body = [];
	
	console.log(req.method);
	console.log(req.headers);
	
	req.on('data', function (chunk) {
		body.push(chunk);
	});
	
	req.on('end', function () {
		body = Buffer.concat(body);
	});		
	
	resp.writeHead(200, { 'Content-Type': 'text-plain' });
	resp.end(body.toString());
}).listen(8080);

