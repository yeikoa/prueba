class Person{
    constructor(name,lastName){
        this.name = name
        this.lastName = lastName
    }
}
const pedro = new Person("Pedro", "Arrieta");
const ricardo = new Person("Ricardo", "Retana");
//Relacion
ricardo.parent = pedro;
console.log(ricardo);
console.log(pedro);