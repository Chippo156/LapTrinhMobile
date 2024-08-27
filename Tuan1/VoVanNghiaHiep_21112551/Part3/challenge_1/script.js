let data1 = [17,21,23]
let data2 = [12,5,-5,0,4]

function printForecast(arr) {
   let str = ''
   for(let i = 0; i < arr.length;i++){
    str += `${arr[i]}°C in ${i+1} days...`
   }
    return str

}
console.log(printForecast(data1))
console.log(printForecast(data2))