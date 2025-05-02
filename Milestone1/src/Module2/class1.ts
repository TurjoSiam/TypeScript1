{
    //type assertion

    const converter = (value: number | string): number | string => {
        if (typeof value === "number") {
            const result = value * 1000;
            return result;
        }
        else if (typeof value === "string") {
            const convertedValue = parseFloat(value);
            const result = `The value is ${convertedValue * 1000}`;
            return result;
        } else {
            return "Invalid input";
        }

    }

    converter(500) as number;


}