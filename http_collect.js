const http=require('http');
const url=process.argv[2];

http.get(url,(response)=>{
  let str='';
  let numChar=0;
  response.setEncoding('utf-8');
  //data
  response.on('data',(data)=>{
    str+=data;
  });
  //error
  response.on('error',console.error);
  //end
  response.on('end',()=>{
    numChar=str.length;
    console.log(numChar+'\n'+str);
  });
}).on('error',console.error);
