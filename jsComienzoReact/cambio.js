const title = document.createElement("h1");
title.innerText = "Hola yeiko desde js";

const button = document.createElement("button");
button.innerText = "click";

button.addEventListener("click", function(){
    title.innerText ="evento prueba";
    alert("Se realizo un click");
});

document.body.append(title);
document.body.append(button);
