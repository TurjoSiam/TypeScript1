{

    const findingPropertyValue = (value, key) => {
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


    const result = findingPropertyValue(user, "progress")




}