data1 = [5, 2, 4, 1, 15, 8, 3]
data2 = [16, 6, 10, 5, 6, 1, 4]

const average = (data) =>{
  const humanAges = data.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adultAges = humanAges.filter(age => age >= 18);

  const averageAge = adultAges.reduce((acc, age) => acc + age, 0) / adultAges.length;

  console.log(averageAge);
  return averageAge;
}
average(data1);
average(data2);


