{

    //type changing with type mapping
    type AreaNumber = {
        height: number;
        width: number
    }

    type AreaString = {
        [key in keyof AreaNumber]: string
    }

    //type changing dynamically. if want to keep different types for different value
    type MultipleType<T> = {
        [key in keyof T]: T[key];  //here we received the types within T and mapped them to get each property in key, and after that changed the type by accessing the properties of T with the mapped property 'key'
    }

    const multipleType: MultipleType<{ height: string, width: number }> = {
        height: "22",
        width: 20
    }






}