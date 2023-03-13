//new Object()

const user={
    name:"Yeiko",
    lastname: "Artavia",
    age: 20,
    showName(){
        return this.name;
    }
}
console.log(Object.keys(user)); //values

//Contructores que vienen con js se pueden usar y alterar

const s = new String("Holaa mundo");

String.prototype.concatLoco = function(){
    return this + "loco" ;  
}
console.log(s.concatLoco());