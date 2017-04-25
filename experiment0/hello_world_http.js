var http=require('http');
var port=8082;

http.createServer((req,res)=>{
  res.writeHead('200');
  res.end('hello world!');
}).listen(port);
