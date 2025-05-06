//task 1
const task1: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!"

// console.log(task1);


//task 2
const task2 = <T>(value: T): T => {
    return value;
}

type Obj = {
    name: string;
    age: number;
    role?: "admin" | "user" | "guest"
}

const obj: Obj = {
    name: "siam",
    age: 29,
    role: "admin"
}

// console.log(task2<Obj>(obj));


{
    //task3

    type Person = {
        name: string;
        address: string;
        hairColor: string;
        eyeColor: string;
        income: number;
        expense: number;
        hobbies: string[];
        familyMembers: string[];
        job: string;
        skills: string[];
        maritalStatus: boolean;
        friends: string[]
    }
}

{
    //task 4
    interface Book {
        name: string;
        page: number;
        isAvailable: boolean;
    }

    interface Magazine {
        cover: boolean;
        page: number;
        price: number;
    }

    type BookMag = Book & Magazine;

    type MagBook = Magazine | Book;
}
{
    //task 5

    const revStr = (value: string): string => {
        const newStr = value.split("").reverse().join("");
        return newStr;
    };

    // console.log(revStr("bangladesh"));
}

{
    //task 6
    const sum = (...value: number[]): number => {
        const total = value.reduce((prev: number, curr: number) => prev + curr, 0);
        return total;
    }

    // console.log(sum(5, 6, 7, 8));

}

{
    //task 7
    const newFunc = (value: number | string): number | string => {
        if (typeof value === "string") {
            return value.length;
        }
        else if (typeof value === "number") {
            return value * value;
        }
        else {
            return "invalid input"
        }
    }
    // console.log(newFunc("hello"));

}

{
    //task 8
    type User = {
        name: string;
        email: string;
    }

    type Admin = {
        adminLevel: number;
    }

    type AdminUser = User & Admin

    const describeAdmin = (value: AdminUser): string => {
        return `Mr ${value.name} with email ${value.email} is our level${value.adminLevel} manager`
    }

    const manager: AdminUser = {
        name: "siam",
        email: "siam@gmail.com",
        adminLevel: 3
    }

    // console.log(describeAdmin(manager));
}

{
    //task 9
    type Employee = {
        name: string;
        age: number;
        city: string
    }

    const employee = {
        name: "siam",
        age: 29,
        city: "Feni"
    }

    const getEmployeeCity = (value: Employee): string => {
        return value?.city;
    }

    // console.log(getEmployeeCity(employee));
}

{
    //task 10
    const name: string = "Siam";

    const getDisplayName = (value: string | undefined | null): string => {
        return value ?? "Anonymous";
    }

    // console.log(getDisplayName(name));

}

{
    //task 11
    const data: string = "Laptop";

    const processData = (value: unknown): number | string => {
        if (typeof value === "number") {
            return value * value;
        }
        else if (typeof value === "string") {
            return value.toUpperCase();
        }
        else {
            return "Invalid input"
        }
    }

    // console.log(processData(data));

}

{
    //task 12
    const errMsg = (value: string): never => {
        throw new Error(value);
    }
}

{
    //task 13
    const recArr = (value: any[]): any[] => {
        const arrDup = value.filter((element, index, arr) => arr.indexOf(element) === index);
        return arrDup
    };

    const data = [3, "hello", 3, 5, 6, "hello"]
    console.log(recArr(data));
}