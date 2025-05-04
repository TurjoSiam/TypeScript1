{
    // generic with function

    const assigningTitle = <T>(value: T): {} => {
        return {
            ...value,
            title: "web developer"
        };
    };

    type AssigningTitle = {
        user: string;
        age: number;
        isAvailable: boolean
    };

    const result = assigningTitle<AssigningTitle>(
        {
            user: "siam",
            age: 29,
            isAvailable: true
        }
    );

    console.log(result);




}