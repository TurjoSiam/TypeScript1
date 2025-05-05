{

    type Siam = {
        user: string
    }

    const promiseFunc = (): Promise<Siam> => {
        return new Promise<Siam>((resolve, reject) => {
            const data: Siam = { user: "siam" };
            if (data) {
                resolve(data);
            }
            else {
                reject("No valid data found")
            }
        });
    };

    const result = async () => {
        const data: Siam = await promiseFunc();
        console.log(data);
    }

    result()



}