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



//array mapping
const historyOfBd: number[] = [1952, 1969, 1971, 1975, 1989, 1996, 2000, 2002, 2012, 2024];

const historyAfterBirth: number[] = historyOfBd.map((year: number): number => year + 2);