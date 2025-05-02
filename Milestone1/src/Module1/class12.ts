{
    //unknown type
    const speedOfCar = (value: unknown): number => {
        if (typeof value === "number") {
            const result = (value * 1000) / 3600;
            console.log(result);
        }
        else if (typeof value === "string") {
            const convertedValue = value.split(" ");
            const speed = convertedValue[0];
            const result = parseFloat(speed);
            console.log((result * 1000) / 3600);
        }
        else {
            console.log("wrong input");
        }
    }

    speedOfCar("900 kms");



    //never type
    const throwErr = (message: string): never => {
        throw new Error(message);
    }

    throwErr("Authentication failed");



}
