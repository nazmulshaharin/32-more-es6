const fish = {id: 58, name: 'King Hilsha', price: 9000, phone: '01785222222', dress: 'silver', address: 'chandpur'}
//const phone = fish.phone;
//const price = fish.price
//console.log(phone, price);

//সবগুলো প্রপাটি িএকসাথে পাওয়ার জন্য
//const { phone, price, id } = fish;
//
//console.log(phone, price)

//
const company = {
  name: 'GP',
  ceo: {id: 1, name: 'ajmaol', food: 'fuchka'},
  web : { work: 'website devepoment', employee: 22, framework: 'react'},
};
//const work = company.web.work; অথবা
const {work, framework} = company.web;
const {id, name } = company.ceo;
console.log(work, framework, id, name);
