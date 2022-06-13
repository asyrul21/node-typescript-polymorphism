const PolymorphicHonk = (vehicle: IVehicle): void => {
    console.log("Polymorphic Honk!");
    vehicle.honk();
};

export default PolymorphicHonk;
