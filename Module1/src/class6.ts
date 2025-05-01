//normal function and arrow function

function total(first: number, second: number): number {
    return first + second;
}

const totalResult = (third: number, fourth: number): number => {
    return third + fourth
}


//method = object with a function in it

const admin1 = {
    userName: "Siam",
    age: 29,
    email: "siam@gmail.com",
    newAge (laterAge: number): string {
        return `admin ${this.userName} has the new age ${this.age + laterAge}`;
    }
}

