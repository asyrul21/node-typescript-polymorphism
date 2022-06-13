class Motorcycle implements IVehicle {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    honk() {
        console.log("PEEEP!");
    }
}

export default Motorcycle;
