//Challenge 1
console.log("Challenge 1");

function calculateBMI(mass, height) {
    return mass / (height * height);
}

const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;


const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);

const markHigherBMI1 = markBMI1 > johnBMI1;
console.log(`Data 1: Mark's BMI = ${markBMI1.toFixed(2)}, John's BMI = ${johnBMI1.toFixed(2)}`);
console.log(`Mark BMI > John BMI ?  ${markHigherBMI1}`);

// Data 2
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Data 2: Mark's BMI = ${markBMI2.toFixed(2)}, John's BMI = ${johnBMI2.toFixed(2)}`);
console.log(`Mark BMI > John BMI ${markHigherBMI2}`);

//Challenge 2 

console.log("Challenge 2");
console.log("Data 1 ");

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI ${markBMI1.toFixed(2)} is higher than John's  ${johnBMI1.toFixed(2)}!`)
} else {
    console.log(`John's BMI ${johnBMI1.toFixed(2)} is higher than Mark's! ${markBMI1.toFixed(2)}`);
}
console.log("Data 2");

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI ${markBMI2.toFixed(2)} is higher than John's  ${johnBMI2.toFixed(2)}!`)
} else {
    console.log(`John's BMI ${johnBMI2.toFixed(2)} is higher than Mark's! ${markBMI2.toFixed(2)}`);
}