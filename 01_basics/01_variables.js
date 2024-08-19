// here we will gonna see how the variables are decleare 

// we have the const variable which can not be change further 
// let variable be not be change 
// var variable can be redeclare and reuse

const account_id = 4523; // there are the things which can not be change so we use the const variable so it can not be change

let account_email = "kunalpal839@gmail.com";

var account_password = "123456"; // we not use the var right now in javaScript because of scope of the problem

/*

prefer not use var 
because of issue in block scope and functioal scope

*/



account_city = "Mumbai"

accountState = undefined;


// account_id = 1254; //not allowed

console.log(account_id);

account_email = "test@gmail.com";
console.log(account_email);

account_password = "45877";
console.log(account_password);

console.table([account_email , account_id , account_password , account_city , accountState]);

account_city = "delhi";

console.table([account_email , account_id , account_password , account_city , accountState]);





