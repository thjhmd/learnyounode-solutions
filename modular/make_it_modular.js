const myModule=require('./mymodule');
const dir=process.argv[2];
const ext=process.argv[3];

myModule(dir,ext,(err,list)=>{
  if(err){
    return console.log(err);
  }
  list.forEach((file)=>console.log(file));
});
