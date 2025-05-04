{

    const findingPropertyValue = <T, Y extends keyof T>(value: T, key: Y) => {
        return value[key];
    }


    type User = {
        nick: string;
        isAvailable: boolean;
        progress: number;
        email: string
    }


    const user: User = {
        nick: "siam",
        isAvailable: true,
        progress: 85,
        email: "siam@gmail.com"
    }


    const result = findingPropertyValue<User, "progress">(user, "progress");
    console.log(result);




}