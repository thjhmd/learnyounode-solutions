var http=require('http');
var url=require('url');
var port=process.argv[2];

http.createServer((req,res)=>{
  let urlObject=url.parse(req.url,true);
  let pathname=urlObject.pathname;
  let strTime=urlObject.query.iso;
  let result;
  if(pathname==='/api/parsetime'){
    result=getTimeObj(strTime);
  }else if(pathname==='/api/unixtime'){
    result=getUnixTime(strTime);
  }
  if(result){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(result));
  }else{
    res.writeHead(404);
    res.end();
  }
}).listen(port);

function getUnixTime(strTime){
  return{
    unixtime:Date.parse(strTime)
  };
}

function getTimeObj(strTime){
  let date=new Date(Date.parse(strTime));
  return{
    hour:date.getHours(),
    minute:date.getMinutes(),
    second:date.getSeconds()
  };
}
