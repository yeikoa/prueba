class Person{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

}
class Programmer extends Person{
    constructor( name, lastName,languaje){
        super(name, lastName);
        this.languaje = languaje;
    }
}
const person = new Person("maria","perez");
console.log(person);

const programmer = new Programmer("Yeiko","Artavia","java");

console.log(programmer);


