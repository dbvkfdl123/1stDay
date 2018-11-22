var fs = require('fs');

//파일 읽기
var data = fs.readFile('../README.md', 'utf-8', function(err, data){
    console.log("DATA = "+ data);

});

//파일 쓰기
fs.writeFile('./output.txt','Hello World', function(err){
    if(err)
    {
        console.log('Error: '+ err);
    }
    console.log("쓰기 완료");
});