var http=require('http');
var map=require('through2-map');

let server=http.createServer((req,res)=>{
  if(req.method!='POST'){
    return res.end('POST me please');
  }
  req.pipe(map((chunk)=>{
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(process.argv[2]);
