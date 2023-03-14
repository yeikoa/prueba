const background = "black";
const color = "white";

const isAuthorized = false;


const button = document.createElement("button"); //Caso contrario :
button.innerText = "click me";             //esta parte es como utilzar if y else
button.style =  `background: ${isAuthorized ?  "blue": background}; color: ${color}`;//String literals y a ? se le conoce como operador ternario

button.addEventListener("click",()=> {
    //Return sirve para verificar tambien en vez del else se podria decir
    if (isAuthorized) {
        return alert("Esta autorizado");
    }
    alert("No esta autorizado");
  
    
})
document.body.append(button);