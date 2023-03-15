const http = require("http");

let port = 8000;

http.createServer((request, response) => {
	if(request.url == "/"){
		response.writeHead(200, {"Content-type": "document/html"});
		response.write(JSON.stringify(users));
		response.end();
	} else if(request.url == "/" request.method == "Post"){
		response.writeHead(200, {"Content-type": "application/json"});
		response.write(JSON.stringify(users));
		response.end();
	}
}).listen(port);

console.log(`Server now accessible at localhost:${port}`);