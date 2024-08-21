const john = {
    fullName: "John",
    mass: 92,
    height: 1.95,
    calcBMI: () => {
        return john.mass /
            (john.height * john.height);
    }
}
const marks = {
    fullName: "marks",
    mass: 78,
    height: 1.69,
    calcBMI: () => {
        return marks.mass /
            (marks.height * marks.height);
    }
}

if (marks.calcBMI() < john.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI().toFixed(2)}) is higher than ${marks.calcBMI().toFixed(2)}'s (23.9)!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI().toFixed(2)}) is lower than ${marks.calcBMI().toFixed(2)}'s (23.9)!`);

}