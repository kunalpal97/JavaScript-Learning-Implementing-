
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


// Non - premitive Data type (Reference datatype) -> Arrays , Objects* , Functions 

//Arrays
const heros = ["ironman" , "spiderman" , "thor"];

console.log(heros);

// objects ke andar key value pair mai.. values ko store karte hai 


let mydetails = {
    name : "Kunal",
    age : 23,
}

console.log(mydetails);

// functions 

const myfunc = function (){

    let num1 = 5 , num2 = 10;
    return num1+num2;

}

console.log(typeof myfunc);







// JavaScript is statically typed language or Dynamically typed language? 

// JS is Dynamically typed language 

