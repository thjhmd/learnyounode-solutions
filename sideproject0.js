var http=require('http');
var url=require('url');
var port=9000;

//let's create a simple api
http.createServer((request,response)=>{
  let urlObject=url.parse(request.url,true);
  let pathname=urlObject.pathname;
  let strName=urlObject.query.name;
  let result;

  if(pathname==='/api/greetings'){
    result=greetings(strName);
  }

  if(result){
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(result));
  }else{
    response.writeHead(404);
    response.end();
  }
}).listen(port);

function greetings(name){
  return{
    greeting:'Hi '+name+'!'
  };
}
