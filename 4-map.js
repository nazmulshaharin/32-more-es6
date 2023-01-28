const numbers = [10, 14, 9, 15, 25,40];
const output2 = [];
//
//
const doubleIt = number => number * 2;
for(const number of numbers){
  //const result = number * 2; অথবা
  const result = doubleIt(number);
  output2.push(result);
}
console.log(output2);

//
/* const double = result => result * 3;
for(const result of numbers){
  const topper = double(result);
  output2.push(topper);
}
console.log(output2); */
//
/* function doubleOld(number){
  return number * 2;
} */
/* //
const doubleIt = number => number * 2; */

//loop throw each element
//
 const output = numbers.map(doubleIt);
const output3 = numbers.map( x => x * 3);
const output4 = numbers.map(doubleIt);
//console.log(output);
console.log(output3);
//console.log(output4);

//
const squares = numbers.map(x => x *x);
//console.log(squares); 