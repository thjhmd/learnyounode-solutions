var http=require('http');
var fs=require('fs');
let port=process.argv[2];

//without 'through2-map' api
let server=http.createServer((request,response)=>{
  let body='';
  request.setEncoding('utf-8');

  if(request.method!='POST'){
    return response.end('Only POST');
  }

  request.on('data',(data)=>{
    body+=data;
  });

  request.on('error',(err)=>{response.end(err)});
  
  request.on('end',()=>{
    response.end(body.toUpperCase());
  });
});
server.listen(port);
