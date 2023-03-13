//Permite diferentes tipos de datos ser procesados y tambien si vienen de una herencia
class Person{
    constructor(name,lastName){
        this.name=name;
        this.lastName=lastName;
    }

}
class Programmer extends Person{
    constructor(languaje,name,lastName){
        super(name,lastName);
        this.languaje = languaje;
    }
    
}
const yeiko = new Person("Yeiko", "G");
const mere = new Programmer("JavaScript","Mere", "Gamboa");

console.log(yeiko);
console.log(mere);

function writeFullName(p){
    console.log(p.name + " " + p.lastName);
}
writeFullName(yeiko);
writeFullName(mere);