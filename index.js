// write your code here
var http = require('http');

var server = http.createServer(function (request, response){
    console.log('got a request!');
    console.dir(response.statusCode);
    response.write('Hello World');
    response.end();
})
server.listen(8080, '127.0.0.1');

console.log('Server is listening at http://localhost:8080/');