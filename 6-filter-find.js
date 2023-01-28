// filter হচ্ছে শর্ত যতগুলো ফিল আপ করবে ততগুলো দেখাবে
//1
const numbers = [10, 25, 17, 19, 27, 30, 35, 40, 33];
const bigNumbers = numbers.filter(number => number > 30);
const smallNumbers = numbers.filter(number => number < 15);
console.log(smallNumbers);
console.log(bigNumbers);
//2
const products = [
  {name: 'water bottle', price: 50, color: 'yellow'},
  {name: 'mobile phone', price: 15000, color: 'black'},
  {name: 'smart watch', price: 3000, color: 'black'},
];
const expensive = products.filter(product => product.price > 10000);
const lessExpensive = products.filter(commodity => commodity.price < 5000);
const color = products.filter(product => product.color == 'black');
console.log(color);
console.log(expensive);
console.log(lessExpensive);

//find শর্ত  একের অধিক ফিল আপ করলেও শুধু প্রথমটা দেখাবে
//3
const blackItem = products.find(product => product.color == 'black');
console.log(blackItem);