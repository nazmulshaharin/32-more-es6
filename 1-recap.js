//const hubby = 'omar sany';
//const myNotes = `i am the hubby of ${hubby}`;
//console.log(myNotes);
//default parameter
function maxNumber(array = []){
  const max = Math.max(...array);
  return max;
}
const biggest = maxNumber();
console.log(biggest);

//arrow function 
const square = x => x * x;
console.log(square(10));


//practices
function minNumber(number = []){
  const min = Math.min(...number);
  return min;
}
const lowestNumber = minNumber();
console.log(lowestNumber);
