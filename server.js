var http = require('http');
var url = require('url');

function start() {
	var onRequest = function(request, response) {
		if  (request.url === '/favicon.ico') { // request.url 
			// figure out favicon requests and ignore them or whatever
		    response.writeHead(200, {'Content-Type': 'image/x-icon'});
			response.end();
			console.log('favicon requested');
			return;
		}

		request.on('data', function(chunk) {
			console.log('BODY: ' + chunk);// POST data ?
		});
		
		var pathname = url.parse(request.url).pathname;

		console.log("Request received\t" + pathname);
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write('Node works!');
		response.end();
	}
	
	

	var server = http.createServer(onRequest);
	server.listen(8888); // alt: listen(1337, '127.0.0.1');
	
	// server.once --> one time listener
	server.on('connection', function(stream) {
		console.log('someone connected!');
	});
	
	console.log("Server started.");
}

exports.start = start; // alternatively, use module.exports = yourStuff, if you only export one thing...