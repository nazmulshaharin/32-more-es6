// declare variable based on the name of an object property
const myObject = { x: 2, y: 10, z: 15, p: 36};
const { x, p } = myObject;
console.log(myObject?.a?.b);// এখানে ? মান চিহ্তটি ব্যবহার করা হয় যখন কোনো ভ্যঅলু পাওয়া যায় না্তখন undefined দেখানোর জন্য ব্যবহার করা হয়। ? এটা অপশনাল দিলে ভাল 

//detructuring array
const [a, b] = [20, 35];
console.log(a, b);