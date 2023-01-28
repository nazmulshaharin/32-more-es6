const friends = ['naem', 'shaharin', "Emon", 'Shahed'];
const fLength = friends.map(friend => friends.length);
console.log(friends);

//
const products = [
  {name: 'water bottle', price: 50, color: 'yellow'},
  {name: 'mobile phone', price: 15000, color: 'black'},
  {name: 'smart watch', price: 3000, color: 'black'},
];
// map রিটার্ন করে
const productName = products.map(product => product.name);
const productPrices = products.map(my => my.price);
products.map(product => console.log(product));
console.log(productName, productPrices);

// for each যখন রিটার্ন করে না
products.forEach(product => console.log(product));