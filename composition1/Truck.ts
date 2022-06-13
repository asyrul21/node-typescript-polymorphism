class Truck implements IVehicle {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    honk() {
        console.log("HOOONKKKKK!");
    }
}

export default Truck;
