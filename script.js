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


// const ageNuel = 2026 - 2003;
// const ageMelody = 2026 - 2004;
// console.log (ageNuel, ageMelody);

// console.log(ageNuel * 2, ageMelody/2);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// console.log(x);

// //comparason operator
// console.log(ageNuel > ageMelody);
// console.log(ageMelody >= 18);

// //challenge

// const heightNuel =1.72;
// const massNuel =56;

// const heightMel = 1.62;
// const massMel = 52;

// let bmiNuel = massNuel/heightNuel;
// let bmiMel = massMel/heightMel;

// console.log(bmiNuel);

// console.log(bmiMel);


// console.log(bmiMel > bmiNuel);

// if(bmiMel > bmiNuel){
//     console.log("She's bigger than me")
// } else{
//     console.log("It's a lie!")
// }




// //Strings and template


// const secondName = 'Nuel';
// const work = 'Student';
// const dob = 2003;
// const year = 2023;

// const nuel = "I'm"+ secondName 

// const nuelNew = `I'm ${secondName} `

// //taking decisions

// const age = 16;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//  console.log('Approved')
// } else {
//  console.log('Unsatisfied minimum requirements')
// }


// //Type conversion 

// const inputYear = '2003 ';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18)


// //Type coercion
//  console.log('I am' + 23 + 'years old');
//  console.log('23' - '10' - 3);
//  console.log('23'/'2')
//  console.log('23'>'18');


//  //Truthy and falsy
//  console.log(Boolean(0))

//Equality operator

// const age = 18;
// if(age === 18){
//     console.log("You're an adult (This one is strict. Does not perfrom type coercion)")
// }

// if(age == 18){
//     console.log('Adult you are(Is not strict. Performs type coercion)');
// }


//Boolean Logic

// const issaxy= true;
// const ispetite = false;

// console.log(issaxy && ispetite); //And
// console.log(issaxy || ispetite); //Or
// console.log(!issaxy); //Not

// const shouldride = ispetite && issaxy;

// if (issaxy || ispetite) {
//     console.log('Melody is good enough');
// } else{
//     console.log('Not good enough');
// }


//second project challenge 

// const scoreDolphin = (96+ 108 +89)/3;
// const scoreKoalas = (88 + 91 + 110)/3;
// console.log(scoreDolphin, scoreKoalas);

// if (scoreDolphin > scoreKoalas){
//     console.log('Dolphins win Trophy');
// } else{
//     console.log('Koalas win');
// }


//Switch statement

// const day = 'Monday';

// switch (day) {
//     case 'Monday':
//         console.log('Meditate');
//         console.log('Go to coding class');
//         break;
//     case 'Tuesday':
//     console.log('Prepare theory videos');
//         break;
//     case 'Wednesday':
//             console.log('Do something');
//             break;
//     case 'Thursday' :
//     case 'Friday' :
//         console.log('Another thing you must do'); 
//         break;
//     case 'Saturday' :
//     case 'Sunday' :
//         console.log('Rest and leisurely learning'); 
//         break;  
//         default:
//             console.log('Not Valid');
// }

// let month = 'May';

// if (month === 'Jan'){
//     console.log('Oh sh*t');
// } else if (month === 'Feb'){
//     console.log('Damn!');
// } else if (month === 'Mar'){
//     console.log('Oh wow');
// } else if(month === 'Apr'){
//     console.log('hhh');
// } else if(month === 'May'){
//     console.log('Yay!');
// } else if(month === 'June'){
//     console.log('ehh alright')
// }else {
//     console.log('OK');
// }


//The Conditional(Ternary)

const age = 23;
age>= 18 ? console.log('I like gurls!'):
console.log('I like othe things!');

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink); 

let drink2;
if (age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'Kalyppo'
}
//Javascript challenge
let price = 200;
let tip = (Number/100) *price

let tip2 = price >=50 &&  price <=300 ? price * .15 :
price * .2;
console.log(tip2);

if (price >= 50 && 300){
    tip = (15/100)*price
} else{
    tip = (20/100)*price
}
console.log(tip);



