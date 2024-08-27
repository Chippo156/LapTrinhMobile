data1 = {
  julia:[3, 5, 2, 12, 7],
    kate:[4, 1, 15, 8, 3]
}
data2 = {
  julia:[9, 16, 6, 8, 3],
    kate:[10, 5, 6, 1, 4]
}

function checkDogs(dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice(1,-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    dogs.forEach(function(dog,i){
        if(dog>=3){
          console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
        }
        else{
          console.log(`Dog number ${i+1} is still a puppy`);
        }
    })
}

checkDogs(data1.julia,data1.kate);
checkDogs(data2.julia,data2.kate);
