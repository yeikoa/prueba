function Person(){
    this.name  = "";
    this.lastName = "";
}
function  Programmer(){
    this.lenguaje = "";
}

Programmer.prototype= new Person();

console.log(Programmer);
console.log(Person);

const programmerJava = new Programmer();
programmerJava.name = "Yeiko";
programmerJava.lastName = "Artavia";
programmerJava.lenguaje ="JavaScript";

const person = new Person();
person.name = "Mere";
person.lastName = "Gamboa";

console.log(programmerJava);
console.log(programmerJava.name + " programa en: " +programmerJava.lenguaje);