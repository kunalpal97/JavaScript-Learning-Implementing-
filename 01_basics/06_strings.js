// strings can be denoted as "" , ' ' both works for stings


const name = "Kunal";

const age = 22;

//console.log(name + " " + age + " Values"); // this is not recommend for the strings to write in this way

// stings ko aaj ke jaise use karna chahiye 

//console.log(`hay my name is ${name} and my age is ${age}`);

const gameName = new String("Kunal Pal"); // using new key word we are using the object of js

// above code will act like a object 

// indexes access karna hai to
console.log(gameName[6]);

console.log(gameName.__proto__); // __proto__ is used to return the object 

console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());

console.log(gameName.charAt(8));

// pata karna hai kon se index pe element 'k' aata hai to use the index of 

console.log(gameName.indexOf('P'));

console.log(gameName.substring(0 , 19)); // substring ke parameter ke andar start index do and end index do

// substring ke andar ager neg diya to wo obey kar deta hai our ignore kar deta hai

console.log(gameName.slice(-8, 5)); // 

// slice is same as substring but in slice we can give the negative values also


const newstring = "      kuch nhi ye text hai  "

console.log(newstring);

console.log(newstring.trim()); // aage ki line our peeche ke spaces ko hata deta hai trim() function

const url = "https://kunal.dev/kunal%20%testmefine";

console.log(url.replace('%20%' , '-'));


console.log(url.includes('k')); // check kar string me ye prenst hai ki nhi 

// string ko array mai convert karna hai to


console.log(gameName.split(' ')); // ' ' kiss basese pe split karna hai wo daal do
















