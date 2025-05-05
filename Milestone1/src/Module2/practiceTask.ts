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

console.log(task2<Obj>(obj));


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


