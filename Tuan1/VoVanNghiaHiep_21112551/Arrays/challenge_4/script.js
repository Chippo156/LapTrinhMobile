const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((dog) => {
    var recommendedFood = dog.weight ** 0.75 * 28;
    Object.defineProperty(dog, "recommendedFood", { value: recommendedFood.toFixed(2) })
    console.log(dog);
})

//

var dogs_Sarah = dogs.filter((dog) => {
    return dog.owners.includes("Sarah");
})
dogs_Sarah.forEach(dog => {
    if (dog.food > dog.recommendedFood) {
        console.log('Sarah\'s dog is eating too much.');
    } else if (dog.food < dog.recommendedFood) {
        console.log('Sarah\'s dog is eating too little.');
    } else {
        console.log('Sarah\'s dog is eating the recommended amount.');
    }
});
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach((dog) => {
    if (dog.curFood > dog.recommendedFood) {
        dog.owners.forEach((own) => {
            if (!ownersEatTooMuch.includes(own)) {
                ownersEatTooMuch.push(own);
            }
        })
    } else if (dog.food < dog.recommendedFood) {
        dog.owners.forEach(owner => {
            if (!ownersEatTooLittle.includes(owner)) {
                ownersEatTooLittle.push(own);
            }
        });
    }
})

console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too much`);

const isAnyDogEatingExactlyRecommended = dogs.some(dog => dog.curFood === dog.recommendedFood)
console.log(isAnyDogEatingExactlyRecommended);

const dogsEatingOkayAmount = dogs.filter(dog => dog.food <= dog.recommendedFood * 1.1 && dog.food >= dog.recommendedFood * 0.9);
console.log(dogsEatingOkayAmount);

const sortedDog = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood)
console.log(sortedDog);