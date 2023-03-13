const user ={
    name: "Yeiko",
    lastName:"Artavia",
    age: 20,
    showFullName(){
        return this.name + " " + this.lastname;
    }

};
//Contructor
function Person(){
    this.name ="";
    this.lastName="";
    this.age=0;

    this.showFullName = function(){
        return this.name + " " + this.lastName;
    }
}
const user2 = new Person();
user2.name = "Mere"
user2.lastName ="Gamboa"
user2.age = 22

console.log(user2.showFullName())