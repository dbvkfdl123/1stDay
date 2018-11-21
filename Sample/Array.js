/*
    배열
    concat:해당 배열에 지정한 항목들을 추가한 새로운 배열 리턴
    pop:마지막 항목을 제거한다음 리턴
    push: 마지막에 하나 이상의 항목 추가
    slice: 배열의 일부 리턴
    sort:비교에 사용할 함수 따로지정 (정렬)
    splice:구역을 삭제, 항목 추가
    unshift:배열의 시작부분에 항목추가
*/

var arr = new Array();
arr[0] = "dog";
arr[1] = 23;
arr[2] = "cat";

console.log(arr[2]);
console.log(arr.length);

//arr.length;      변수
//arr.length();   함수호출

var arr2 = new Array("cat", "dog");
console.log(arr2.length);

var arr3 = ["dog", "cat", "tiger"];
console.log(typeof(arr3[0]));

for(var i=0; i<arr3.length; i++){
    console.log("%s",arr3[i]);
}

for(var i = 0, len = arr3.length; i < len; i++)
{
    console.log("New result = %s", arr3[i]);
}

for(var i = 0, item; item = arr3[i]; i++)
{
    console.log("Result2 = %s", item);
}

for(var i in arr3)
{
    console.log("Result3 = %s", arr3[i]);
}