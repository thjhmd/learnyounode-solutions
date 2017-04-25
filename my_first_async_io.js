var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, content) => {
  err ? console.log(err) : console.log(content.split('\n').length - 1)
});

// fs.readFile(process.argv[2], (err, content) => {
//   if(err) {
//     return console.log(err);
//   }
//   let str = content.toString();
//   let lines = str.split('\n').length - 1;
//   console.log(lines);
// })
