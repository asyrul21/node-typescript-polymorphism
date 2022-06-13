class Car implements IVehicle {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    honk() {
        console.log("HONK!");
    }
}

export default Car;
