{
    class Person {
        type: string;
        age: number;
        designation: string

        constructor(type: string, age: number, designation: string) {
            this.type = type;
            this.age = age;
            this.designation = designation
        }

        canEat(time: number) {
            console.log(`${this.type} is a ${this.designation} who can work for ${time} hrs`);
        }
    };

    class student extends Person {
        group: string;

        constructor(type: string, age: number, designation: string, group: string) {
            super(type, age, designation);
            this.group = group;
        }
    }

    const hasan = new student("pupil", 21, "college", "science");
    hasan.canEat(5);


}