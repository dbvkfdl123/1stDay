// let name = "홍길동"
// let age = 30;
// console.log(age);

let name = "유릇";
let len = name.length;
console.log(len);

let newName = name.replace("유", "Yu"); //replace 는 원래 있던 값을 변경후 반환 하는 방식으로 새로운 변수에 담아야한다.
console.log(newName);

let char = newName.charAt(2);   //chaAt 은 해당 인덱스에 있는 값을 반환
console.log(char);

console.log(newName.toUpperCase()) //toUpperCase 는 문자를 모두 대문자로 변환
console.log(newName.toLowerCase()) //toLowerCase 는 문자를 모두 소문자로 변환

var x = 0;
x += 5;
console.log(x);
console.log('hello' + 'world');
console.log('1'+ 2 + 3+ 4);     //문자열이 하나라도 포함될시 전부 문자로 변환후 출력
console.log(123 === '123');     //bool 형식으로 출력, 타입간의 비교는 등호연산자를 3개 붙여야 정확하게 나온다

/*
    변수 타입 
    var : 범위제약이 없는 변수
    let : 범위에 제약이 있는 변수
    const : 상수
*/

/*
    자료형
    Boolean : true/false
    Number
    String
    undefined
    null
    Object
*/