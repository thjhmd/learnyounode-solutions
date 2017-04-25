var fs=require('fs');
/*
  first convert it to a buffer
  and then convert it to a string
  and then split by \n
  which is automatically stored in an array
  and then get the length of that for the number of lines
*/
var lines=fs.readFileSync(process.argv[2],'utf-8').split('\n').length;
console.log(lines-1);
