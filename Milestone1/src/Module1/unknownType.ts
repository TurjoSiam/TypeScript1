{
    //unknown type
    const speedOfCar = (value: unknown): number | undefined => {
        if (typeof value === "number") {
            const result = (value * 1000) / 3600;
            return result;
        }
        else if (typeof value === "string") {
            const convertedValue = value.split(" ");
            const speed = convertedValue[0];
            const result = parseFloat(speed);
            return result
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
