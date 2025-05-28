

export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'No Address') { }
}

// export class Hero extends Person{

//     constructor(
//         public alterEgo:string,
//         public age: number,
//         public realName: string,        
//     ){
//         super(realName,'New York');

//     }

// }

export class Hero {

    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        //this.person = new Person(realName, 'New York');
    }
}


const person = new Person('Tny Stark','New Tork');

const ironman = new Hero('Ironman', 45, 'David',person);


console.log(person);
console.log(ironman);
//console.log(ironman.address);


