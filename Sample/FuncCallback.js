
function add(a,b, callback){
    var result = a+b;
    callback(result);
}

// function resultFunc(result){
//     console.log("Result = %d",result);
// }

add(10,10,function(result){ 
    console.log("Result = %d",result);

    add(5,5,function(result){
        console.log("Result = %d",result);
    });
});

function oldAdd(a,b){

    var i = 20;
    var j = 30;
    var k = 60;
    
    return a+b;
 
}

var result = oldAdd(1,3);
result = oldAdd(1,result);
result = oldAdd(1,result);

console.log(result);