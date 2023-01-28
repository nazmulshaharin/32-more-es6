class teamMember{
  name;
  role = 'suppport web dev';
  address = 'Bangladesh';
  constructor(name, address){
    this.name = name;
    this.address = address;
  }
}   
   
   class Support extends teamMember {
     groupSupportTime;
      constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
      }
    }
    const amir = new Support('Amir Khan', 'India', 12);
    const salman = new Support('Salman khan', 'Dubai', 2);
    console.log(amir, salman);

//
class neptuneDev extends teamMember{
  codeEditor;
  constructor(name, address, editor){
    super(name, address);
    this.codeEditor = editor;
  }
  releseApp(version){
    console.log(this.name, 'release app version', version);
  }
}
const alia = new neptuneDev('shaharin', 'sitakund');
const ash = new neptuneDev('Nazmul', 'mohadebpur', 'android studio');
ash.releseApp('1.4.5');
//console.log(alia);
//console.log(ash);