//Array function

//filter

var arr = [1, 2, 3, 4, 5]
Array.prototype.filterByHiep = function(callback) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }

    return newArr;
}
var arrNew = arr.filterByHiep((item) => {
    return item > 2;
})

console.log(arrNew);