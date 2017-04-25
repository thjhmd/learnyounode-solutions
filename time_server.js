var net = require('net');
var date = new Date();

var server = net.createServer( (socket) => {
  let year=date.getFullYear();
  let month=('0'+(date.getMonth()+1)).slice(-2);
  let day=('0'+date.getDate()).slice(-2);
  let hours=('0'+date.getHours()).slice(-2);
  let minutes=('0'+date.getMinutes()).slice(-2);
  let dateString=year+'-'+month+'-'+day+' '+hours+':'+minutes+'\n';
  socket.write(dateString);
  socket.end();
} );

server.listen(process.argv[2]);
