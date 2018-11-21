
function add(x,y){
    var total = x + y;
    return total;
}

var result = add(2,3);
console.log(result);

function add2(){
    var sum =0;
    for (var i = 0, j =arguments.length; i< j; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(add2(2,3,4,5));

var avg = function(){
    var sum = 0;
    for(var i = 0, j = arguments.length ; i < j ; i++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}
console.log(avg(3,4,5,6));

//-------------------------------------

function makePerson(first, last){
    return{
        first: first,
        last: last,
        fullName: function(){
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function(){
            return this.last + ' ' + this.first;
        }
    }
}

var person = makePerson("Sangyeol", "Yu");
console.log(person.fullName());
console.log(person.fullNameReversed());

var func = person.fullName;
console.log(func());    //undefined 다른 함수에 있는 함수를 호출할경우 this의 값이 불러오는 함수가아닌 해당 함수로 변환되어 값을 불러올수 없게된다.