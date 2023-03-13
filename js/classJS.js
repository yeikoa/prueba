//class es una forma mas bonita de escribir las funciones en JS o estar mas familiarizado como se manejan en otros lenguajes

//function Person() {
  //  this.name = ""
   // this.lastName=""
//}
class Person{
    constructor(name,lastName){
        this.name = name
        this.lastName = lastName
    }//Los metodos ya pueden ser accedidos por cualquier objeto que lo necesite

    greet(){
        return "Hello i am " + this.name + " " +this.lastName;
    }
}
const user = new Person("yeiko", "Artavia");
const user2 = new Person("Mere", "Gamboa");

console.log(user.greet());