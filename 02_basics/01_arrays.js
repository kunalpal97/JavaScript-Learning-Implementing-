

// arrys  are decelare in side the [] square barcket
// { } curly braces
// () paraenthesis


const arr = [1, 2 , 3 , 4 , 5 , 6];

const test = ["Kunal" , "Arayn " , "Vidhi" , "Mummmy " , "Papa"];

console.log(arr[4]);

console.log(test[6]);


const myarr = new Array(1,2,3,4,5,6);


// array Methods
// myarr.push(5);
// myarr.push(7);
// myarr.pop();

// console.log(myarr);

// myarr.unshift(9); // push ke jaise hai 1st poistion pe value add  kar dega ye

// myarr.shift();  //pop ke jaise hai

console.log(myarr.includes(14));

console.log(myarr.indexOf(8));

console.log(myarr);



// const newArr = myarr.join(); // join has bine teh array and convert it into a string

// console.log(typeof newArr);


// methods slice , splice


console.log("A" , myarr);


const mynewArr = myarr.slice( 1 , 4);

console.log( mynewArr);

console.log("B" , myarr);

const myarr2 = myarr.splice( 1 , 4);

console.log("C" , myarr);

console.log(myarr2);























