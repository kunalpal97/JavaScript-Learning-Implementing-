/* ---------------> Number ------------------> */


const num = 400;

console.log(num);

const money = new Number(1000); // new object bana ke bata raha hu to ye wala properly object ki tarah milta hai

console.log(money);

console.log(money.toFixed(2));


const otherNum = 1165.86666;

console.log(otherNum.toPrecision(5));


// const eknum = 1000000

// console.log(eknum.toLocaleString('en-IN'));


/*----------------- Maths -------------------------*/


console.log(Math);



console.log(Math.abs(-9));

console.log(Math.abs((78-105)));


// abs jo bhi neg values hogi usko +ve me convert kar dega

console.log(Math.round(8.46));

console.log(Math.ceil(8.46)); //ceil will choose the upper value

console.log(Math.floor(8.46));

console.log(`Square root of number is : ${Math.sqrt(10)}`);


console.log(`Square of the number : ${Math.pow(10,5)}`);

// min func and max func

console.log(Math.max(7,8,9,2,3,4,6,1));

console.log(Math.min(7,8,9,2,3,4,6,1));

// math.random function 

console.log(Math.random());
console.log(Math.floor(Math.random()* 10) + 1);

//math.random will gives the values between the 0s and 1s so



const min = 20;

const max = 50;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

console.log();






















