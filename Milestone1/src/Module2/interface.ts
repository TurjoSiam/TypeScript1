{
    //interface
    interface Construction1 {
        material: string,
        price: number,
        place: string,
        isColored: boolean
    }

    type Construction2 = {
        material: string,
        price: number,
        place: string,
        isColored: boolean
    }

    type Tin = number[];
    type Zinc = string;


    const construction: Construction2 = {
        material: "metal",
        price: 85000,
        place: "field",
        isColored: true
    }

    // type can be used for both primitive and non-primitive data type like number, string, array, object.
    //interface can only be used in non-primitive data type like object


}