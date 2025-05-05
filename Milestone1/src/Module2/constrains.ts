{

    const assigningTitle = <T extends { user: string; age: number }>(value: T): {} => {
        return {
            ...value,
            title: "web developer",
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

    const result1 = assigningTitle<AssigningTitle>(
        {
            user: "hasasn",
            age: 30,
            isAvailable: false
        }
    )

    console.log(result);



}