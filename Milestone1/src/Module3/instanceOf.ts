{
    class Animal {
        species: string;
        age: number;
        country: string;

        constructor(species: string, age: number, country: string) {
            this.species = species;
            this.age = age;
            this.country = country
        };

        makeSound() {
            console.log(`${this.species} with the age of ${this.age} do sound`);
        };
    };

    class Dog extends Animal {
        constructor(species: string, age: number, country: string) {
            super(species, age, country);
        };

        makeBark() {
            console.log("the dog is barking");
        }
    }

    class Cat extends Animal {
        constructor(species: string, age: number, country: string) {
            super(species, age, country);
        };

        makeMew() {
            console.log("the cat is mewing");
        };
    };

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    };

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const whichAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            return animal.makeBark();
        }
        else if (isCat(animal)) {
            return animal.makeMew();
        }
        else {
            return animal.makeSound();
        }
    }




}