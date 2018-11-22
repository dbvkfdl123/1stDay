var http = require('http');
var server = http.createServer();

var port = 3000;


server.listen(port , function(){
    console.log("Start Server");
});

/*
    이벤트
    on(event, listener): 지정한 이벤트의 리스너를 추가
    once(event, listener): 지정한 이벤트의 리스너를 추가, 한번만 실행
    removeListener(event, listener): 지정한 이벤트의 리스너를 삭제
*/

server.on('connection', function(socket){
    var addr = socket.address();
    console.log("누가 접속함");
});

server.on('request', function(req, res){
    console.log("누가 요청함");

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    res.write("반갑습니다.");
    res.end();
});