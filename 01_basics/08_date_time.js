
const mydate = new Date();

console.log(mydate);

// date with string and functions

console.log(mydate.toString());

console.log(mydate.toLocaleString())  // 8/24/2024, 1:46:28 PM

console.log(mydate.toLocaleTimeString()); // 1:47:11 PM

console.log(typeof mydate);

// if you want to create a specific date only then you have

const myCreatedDate = new Date(2024 , 5 , 28 , 5 , 2);


console.log(myCreatedDate.toLocaleString());

const newDate = new Date("01-25-2024");

console.log(newDate.toLocaleString());

// time stamp in javascript

let mytimestamp = Date.now();

console.log(mytimestamp);

console.log(newDate.getTime());


console.log(Math.floor(Date.now()/1000));


/* Dates ke sath khel lo */


let thisDate  = new Date();

console.log(thisDate.getDay());


console.log(`Todays day and time is ${mydate} and time is ${mytimestamp}`);

newDate.toLocaleString();

















 

