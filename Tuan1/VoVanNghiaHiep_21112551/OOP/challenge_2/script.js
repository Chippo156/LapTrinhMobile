class CarCl {

    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speedInMiles) {
        this.speed = speedInMiles * 1.6;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}
const car1 = new CarCl('BMW', 120);
const car2 = new CarCl('Mercedes', 95);

// 
car1.accelerate();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
car2.brake();

// Test 
console.log(`BMW speed in mi/h: ${car1.speedUS}`);
car1.speedUS = 70;
console.log(`BMW speed in km/h: ${car1.speed}`);
console.log(`Mercedes speed in mi/h: ${car2.speedUS}`);
car2.speedUS = 50;
console.log(`Mercedes speed in km/h: ${car2.speed}`);