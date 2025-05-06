{
    class Animal {
        // name: string;    //**this should be written if the constructor use the original process
        // age: number;
        // species: string

        // constructor(name: string, age: number, species: string) {  //**this is the original process
        //     this.name = name;
        //     this.age = age;
        //     this.species = species
        // };

        constructor(public name: string, public age: number, public species: string) { }; //**this is the shortcut. just by adding 'public' we don't need to specify type in class and don't need to use this keyword

        title() {
            console.log(`hello ${this.name} is a ${this.species}`)
        }

    };

    const dog = new Animal("rafian", 2, "german");
    dog.title();



}