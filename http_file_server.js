const http=require('http');
const fs=require('fs');

let port=process.argv[2];
let txtPath=process.argv[3];

let server=http.createServer((request,response)=>{
  let readStream=fs.createReadStream(txtPath);
  readStream.on('open',()=>{
    readStream.pipe(response);
  })
  readStream.on('error',(err)=>{
    response.end(err);
  })
});

server.listen(port);

//official learnyounode solution
/*
var server=http.createServer(function(request,response){
  response.writeHead(200,{'content-type':'text/plain'})
  fs.createReadStream(process.argv[3]).pipe(response)
});
server.listen(Number(process.argv[2]));
*/
