function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

bills = [125, 555, 44]

const tips = bills.map(calcTip);

const total = bills.map((bill, index) => bill + tips[index])

console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total);