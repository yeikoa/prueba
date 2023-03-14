//Arreglos
var y =["dog", "cat" , "bird"]
y[3] = "fox"
y.length
for (let i = 0; i < y.length; i++) {
  const element = y[i];
  //console.log(element)
}
var contador=0
for(const currentValue of y){
  contador++
  //console.log(currentValue)
}
//console.log("El numero de elmentos es de "+ contador)
y.push("yeiko")
y.forEach(function(names, index, array) {
  //console.log(index);
});
console.log(y.toLocaleString());
//console.log(y.join());
console.log(y.reverse());

//Funcion 
//let arrayTest;

function avg(arrayTest) {
  var sum = 0;
  for(let i = 0, j = arrayTest.length; i<j; i++){
    sum += arrayTest[i];
  }
  return  sum/arrayTest.length;
}
console.log(avg.apply(null, [2,3,4,5]));
//funcion anonima autoinvocada
var num1= 1;
var num2= 20;

(function() {
  var num2 = 3;
  num1 += num2;
})();

console.log(num1); // 4
console.log(num2); // 2



//Heredando metodos
var o = {
    a: 2,
    m: function(b){
      return this.a + 1;
    }
  };
  
  console.log(o.m()); // 3
  // Cuando en este caso se llama a o.m, 'this' se refiere a o
  
  var p = Object.create(o);
  // p es un objeto que hereda de o
  
  p.a = 20; // crea una propiedad 'a' en p
  console.log(p.m()); // 21
  // cuando se llama a p.m, 'this' se refiere a p.
  // De esta manera, cuando p hereda la función m de o,
  // 'this.a' significa p.a, la propiedad 'a' de p





//Objeto
const user ={
    name: "Yeiko",
    lastname:"Artavia",
    age:20,
    address:{
        country: "Costa Rica",
        city: "Sabalito",
        street: "retana"
    },
    friends:["david", "carlo", "maria"],
    Active: true,
    sendMail(){
        return "sending email..."
    }
}
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
   //Define un objeto
  var you = new Person('You', 24);
  //console.log(you)
  // Estamos creando una nueva persona llamada "You" de 24 años.

//console.log(user.friends)

/*
let namePerson = "yeiko"
let newPerson="Mere"
console.log(namePerson.charAt(0)) 
console.log(namePerson.replace(namePerson,  newPerson))

console.log(namePerson.toUpperCase())
*/
//isFinite()
//console.log(isFinite(2/0))
// function add(x, y=0){
    
//     return x+y;
    
    
    
// }
// console.log(add(10))
//Se puede pasar asi simple console.log(add(10,20))
// function hello(name){
//     return "hola " + name
     // return function(){
    //     return "Hola mundo"
    // }
// }

// const result = hello()
// console.log(hello("yeiko"))