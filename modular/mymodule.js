const fs=require('fs');
const path=require('path');

module.exports=(dir,ext,callback)=>{
  fs.readdir(dir,(err,list)=>{
    if(err){
      return callback(err);
    }
    let list2=list.filter((file)=>{
      if(path.extname(file)==='.'+ext){
        return file;
      }
    });
    callback(null,list2);
  });
}
