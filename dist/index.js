"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./composition1/Car"));
const Motorcycle_1 = __importDefault(require("./composition1/Motorcycle"));
const PolymorphicHonk_1 = __importDefault(require("./composition1/PolymorphicHonk"));
const Truck_1 = __importDefault(require("./composition1/Truck"));
const ButtonA_1 = __importDefault(require("./composition2/ButtonA"));
const ButtonB_1 = __importDefault(require("./composition2/ButtonB"));
const word = "Hello World!";
console.log(word);
/*
 *   Example 1
 */
console.log("\n********** Example 1 **********\n");
const car1 = new Car_1.default("Honda Accord");
const moto1 = new Motorcycle_1.default("Yamaha Motorcycle");
const truck1 = new Truck_1.default("HUGEE Truck");
(0, PolymorphicHonk_1.default)(car1);
(0, PolymorphicHonk_1.default)(moto1);
(0, PolymorphicHonk_1.default)(truck1);
/*
 *   Example 2
 */
console.log("\n********** Example 2 **********\n");
const bA = new ButtonA_1.default();
const bB = new ButtonB_1.default();
// client
const performClick = (btn) => {
    btn.onClick();
    btn.onComplete();
};
performClick(bA);
performClick(bB);
//# sourceMappingURL=index.js.map