
 class Support {
  name;
  role = 'suppport web dev';
  address = 'Bangladesh';
  constructor(name, address){
    this.name = name;
    this.address = address;
  }
  startSession(){
  console.log(this.name, 'start a support session');
  }
}
const amir = new Support('Amir Khan', 'India')
const salman = new Support('Salman khan', 'Dubai');
amir.startSession();
salman.startSession();
//console.log(amir, salman);  


