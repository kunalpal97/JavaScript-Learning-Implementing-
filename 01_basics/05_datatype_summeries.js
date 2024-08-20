
// data types ki summery

// types of data types premitive and non premitive(Reference type)

// call by value and call by reference 

// Premitive -> integers , string , bool , symbol(kisi bhi values ko uniqe banane mai.. use hota hai) , null(khali) , undefine , BigInt

let name = "Kunal";
let age  = 22;
let check = true;

let UserEmail = undefined; // UserEmail;

let id = Symbol('456')
let anotherId = Symbol('456')

console.log(id === anotherId);

console.log(anotherId);

let bigNumber = 104584248799454n;

console.log(bigNumber);




// jitne bhi premitive datatype hote hai wo call by value hote hai 
// jab bhi inko kahi se kahi pe copy karte hai to sirf wo values copy kar ke de di jaati hai
// so inki memory jaha pe wo values stores hai unka access nhi diya jata hai


// JavaScript is statically typed language or Dynamically typed language? 

// JS is Dynamically typed language 


// Non - premitive Data type (Reference datatype) -> Arrays , Objects* , Functions 

//Arrays
// const heros = ["ironman" , "spiderman" , "thor"];

// console.log(heros);

// objects ke andar key value pair mai.. values ko store karte hai 


// let mydetails = {
//     name : "Kunal",
//     age : 23,
// }

// console.log(mydetails);

// functions 

// const myfunc = function (){

//     let num1 = 5 , num2 = 10;
//     return num1+num2;

// }

// console.log(typeof myfunc);

/*<--------------------------------How Memory works here------------------------------------->*/


// bascially we have a two type of memory 
/*
where is stack and heap memory used 

1] Stack Memory -> (Premitive data type uses the stack datatype)

jab bhi stack memory use hoti hai jo bhi value hum ne decleare kiya hai uska ek copy milta hai


2] Heap Memory -> (Jo bhi Non - Premetive Data type hai waha pe heap memory use hoti hai)

// jab koi bhi data type heap ke andar store hota hai to waha se hum ko referece of that value milta hai Original Value ka(jo bhi value hum variable mai... karege wo orginal value mai.. change hoga)
 
 */

let mylaptop = "Kunal Pal"

let anothername = mylaptop;

anothername = "kunal7971"

console.log(mylaptop);
console.log(anothername);


let userOne = {
    email : "xyz@gmail.com",
    id : "testdssd@ybl",  

}

let userTwo = userOne;

console.log(userOne);



userTwo.email = "test@gmail.com";

console.log(userOne);
console.log(userTwo);












