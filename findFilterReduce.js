var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function doubleNumber(x) {
  return x * 2;
}
let newArray = numbers.map(doubleNumber);
console.log(newArray);

//Filter - Create a new array by keeping the items that return true.
let filterNumber = numbers.filter(function (num){
  return num<10;
})
console.log(filterNumber);

//Reduce - Accumulate a value by doing something to each item in an array.
let reduceNumber = numbers.reduce(function(accumulator, currentNumber){
  return accumulator+ currentNumber;
})
console.log(reduceNumber);
//Find - find the first item that matches from an array.
let findNumber = numbers.find(function(num){
  return num>10;
})
console.log(findNumber);

//FindIndex - find the index of the first item that matches.
let findNumberIndex = numbers.findIndex(function(num){
  return num>10;
})
console.log(findNumberIndex);
