// let js ='amazing';
// if (js === 'amazing') alert('Javascript is fun!');
// console.log(40 + 8 + 23 - 10);

// console.log("Nuel");

// let firstName = "Melody";
// console.log(firstName);

// let LOVE = "GOD";
// console.log("LOVE")

// let country = 'Ghana';
// console.log(country);

// let continent = 'Africa';
// console.log(continent);

// let population = 'One thousand';
// console.log(population);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof 'Melody')

// javascriptIsFun = 'YES!';  

// const birthYear = 1991;
// console.log (birthYear);

// var job = 'Programmer';
// job = 'Weed Student'; 


const ageNuel = 2026 - 2003;
const ageMelody = 2026 - 2004;
console.log (ageNuel, ageMelody);

console.log(ageNuel * 2, ageMelody/2);

let x = 10 + 5;
x += 10;
x *= 4;
console.log(x);

//comparason operator
console.log(ageNuel > ageMelody);
console.log(ageMelody >= 18);

//challenge

const heightNuel =1.72;
const massNuel =56;

const heightMel = 1.62;
const massMel = 52;

let bmiNuel = massNuel/heightNuel;
let bmiMel = massMel/heightMel;

console.log(bmiNuel);

console.log(bmiMel);


console.log(bmiMel > bmiNuel);

if(bmiMel > bmiNuel){
    console.log("She's bigger than me")
} else{
    console.log("It's a lie!")
}




//Strings and template


const secondName = 'Nuel';
const work = 'Student';
const dob = 2003;
const year = 2023;

const nuel = "I'm"+ secondName 

const nuelNew = `I'm ${secondName} `

//taking decisions

const age = 16;
const isOldEnough = age >= 18;

if(isOldEnough) {
 console.log('Approved')
} else {
 console.log('Unsatisfied minimum requirements')
}


//Type conversion 

const inputYear = '2003 ';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18)


//Type coercion
 console.log('I am' + 23 + 'years old');
 console.log('23' - '10' - 3);
 console.log('23'/'2')
 console.log('23'>'18');


