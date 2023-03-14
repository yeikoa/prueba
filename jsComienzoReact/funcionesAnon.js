/*function add(x,y ){
    return x+y;
}
const add =(x,y)=>{
    return x+y;
}*/

const showText = ()=> "hola mundo";
const showNumber = ()=> 22;
const showBoolean = ()=> true;
const showArray = ()=> [1,2,3];
const showObject = ()=> ({name: "Ricardo",lastName: "Retana"});
console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());

const button = document.createElement("button")
button.innerText = "click me";
button.addEventListener("click",()=> {
    alert("cliked")
    
})
document.body.append(button);