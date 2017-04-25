const http=require('http');
let url=process.argv[2];

// http.get(url,(response)=>{
//   response.setEncoding('utf-8');
//   response.on('data',(data)=>{
//     console.log(data);
//   });
//   response.on('error',(err)=>{
//     console.log(err);
//   })
// })

//official solution
http.get(url,(response)=>{
  response.setEncoding('utf-8');
  response.on('data',console.log);
  response.on('error',console.error);
}).on('error',console.error)
