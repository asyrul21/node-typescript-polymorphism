import Car from "./composition1/Car";
import Motorcycle from "./composition1/Motorcycle";
import PolymorphicHonk from "./composition1/PolymorphicHonk";
import Truck from "./composition1/Truck";
import ButtonTypeA from "./composition2/ButtonA";
import ButtonTypeB from "./composition2/ButtonB";
import { IActionButton } from "./composition2/IActionButton";

const word: String = "Hello World!";
console.log(word);

/*
 *   Example 1
 */
console.log("\n********** Example 1 **********\n");

const car1: IVehicle = new Car("Honda Accord");
const moto1: IVehicle = new Motorcycle("Yamaha Motorcycle");
const truck1: IVehicle = new Truck("HUGEE Truck");

PolymorphicHonk(car1);
PolymorphicHonk(moto1);
PolymorphicHonk(truck1);

/*
 *   Example 2
 */

console.log("\n********** Example 2 **********\n");

const bA: IActionButton = new ButtonTypeA();
const bB: IActionButton = new ButtonTypeB();

// client
const performClick = (btn: IActionButton) => {
    btn.onClick();
    btn.onComplete();
};

performClick(bA);
performClick(bB);
