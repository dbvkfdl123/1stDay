function testFunc(val)
{
    if(val > 0)
    {
        console.log("val = %d", val);
        testFunc(--val);
    }
}
testFunc(10);

var method = function(val)
{
    if(val > 0)
    {
        console.log("val = %d", val);
        arguments.callee(--val);
    }
}
method(10);

//----------------------------------------

function testFunc(){        //오버라이딩이 되어서 덮어쓰기로 파악 즉 맨위에있는 testFunc은 동작하지 않는다.
    var a = 1;
    function innerMethod()
    {
        return a +1;
    }
    return innerMethod();
}

var a = testFunc();
console.log(a);

function makeAdder(a){
    return function(b){
        return a+b;
    }
}

x= makeAdder(5);
y= makeAdder(20);

console.log(x(6));  //makeAdder(5) return funtion(6) return 5+6+
console.log(y(7));
