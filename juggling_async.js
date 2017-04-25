const http = require('http');
const urls = process.argv.slice(2, process.argv.length);
// let pages = [];
// let waiting = 0;
//
// urls.map( (url, index) => {
//   http.get(url, (response) => {
//     waiting++;
//     let str = '';
//     response.setEncoding('utf-8');
//     response.on('data', (data) => str += data);
//     response.on('end', () => {
//       pages[index] = str;
//       waiting--;
//       if(!waiting) {
//         pages.map( (page) => console.log(page) );
//       }
//     });
//   });
// } );
var urlObject = {
  obj1: new getData(process.argv[2]),
  obj2: new getData(process.argv[3]),
  obj3: new getData(process.argv[4])
};

var finishedCount = 0;

function getData(url) {
  this.contents = '';
  var that = this;
  var options = {
    'data': (data) => that.contents += data,
    'end': () => finish()
  };
  var finish = () => {
    finishedCount++;
    if(finishedCount === 3) {
      for(i in urlObject) {
        console.log(urlObject[i].contents);
      }
    }
  };
  http.get(url, (response) => {
    for(key in options) {
      response.on(key, options[key]);
    };
  });
};
