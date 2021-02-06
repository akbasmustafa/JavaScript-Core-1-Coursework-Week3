// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];


//arrow funtion
var newArray = numbers.map(item=>item*100)
console.log('Arrow Function:' + newArray)

//arrow func with return
var newArray = numbers.map(item=>{return item*100})
console.log('Arrow func with return:'+newArray)

//Noname function
var newArray = numbers.map(function (item) {
  return item * 100;
});
console.log("Func noname:" + newArray);

//name function
var newArray = numbers.map(function multiplyHundred(item) {
  return item * 100;
});
console.log("Func with name:" + newArray);


//Callback function
function multiplyHundred(item) {
  return item * 100;
}
var newArray = numbers.map(multiplyHundred);
console.log("Callback Function:" + newArray);