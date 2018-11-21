var myColor =["red", "green", "black"];

console.log(myColor.toString());

var newColor = myColor.concat("white", "black");
console.log(newColor);
console.log(myColor);

console.log(newColor.pop());
console.log(newColor);

console.log(newColor.push("orange"));
console.log(newColor);
console.log(newColor.push("blue"));
console.log(newColor);

newColor.reverse();
console.log(newColor);

newColor.shift();
console.log(newColor.toString());
newColor.unshift("brown");
console.log(newColor.toString());

newColor.splice(0,2,"test")
console.log(newColor.toString());

newColor.sort();
console.log(newColor);