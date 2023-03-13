function Person(name, lastName){
    "use strict";
    this.name = name;
    this.lastName= lastName; 
    this.displayName = function(){
        return  this.name + " " + this.lastName;
    }
}
const p= new Person("Yeiko","Artavia");
p.name ="yei";
const y = new Person("mere", "Gamboa");
const raul= new Person("Raul","Artavia");

Person.prototype.greet = function(){ //Funcion enlazada al contructor 
    return "Hello i am " + this.name;

}
Person.prototype.age =100;

console.log(p.greet());
console.log(y.age);
console.log(raul.greet());
console.log(y);

