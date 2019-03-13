var testArray= [];

console.log(testArray);

testArray.push(1);

console.log(testArray);

testArray.push(1);

console.log(testArray);

const array1 = [4, 1, 3, 2];

console.log(array1);

array1.sort();

console.log(array1);

console.log(array1.sort(function (a,b){return b-a}));

var num = 12345;

var numString = num.toString();

console.log(numString);

var numSplit = numString.split("");

console.log(Number(numSplit));



console.log(numSplit);

var array2 = numSplit;

console.log(array2);

console.log(array2.sort(function (a,b){return b-a}));

console.log(array2.map(str => parseInt(str)));


