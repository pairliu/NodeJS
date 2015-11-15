var http = require('http');

var options = {
	hostname: 'www.example.com',
    port: 80,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

var request = http.request(options, function(response){
	response.on('data', function(chunk) {
		console.log(chunk.toString());
	});
});

request.write('Hello World');
request.end();