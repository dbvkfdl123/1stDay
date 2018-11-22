

var obj = {};  //var obj = new Object() 와 동일한 생성자;

obj.name = "Sangyeol";
console.log(obj.name);

var obj2 = new Object();
obj2["name"] = "홍길동";
console.log(obj2.name);

var person = {
    name: "홍길동",
    age: 33,
    address: {
        zipcode: 14500,
        city: "서울"
    }
}
