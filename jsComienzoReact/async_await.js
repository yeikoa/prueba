const ul = document.createElement("ul")

//fetch('https://jsonplaceholder.typicode.com/posts') //Devuelve promise osea el usuario puede hacer otras cosas(asincronia)
//.then(()=>console.log('finalizo la carga'))
//.then((Response)=> console.log(Response))
/* .then(function(Response){
   return Response.json(); //api del navegador solo
    
}).then(function(data){
    console.log(data);
   / data.forEach(function(post) {
        const li = document.createElement('li');
        li.innerText =post.title;
        ul.append(li);
        
    });
    document.body.append(ul); 
}); */


async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts') //el await lo marca como asincrono
    const data = await response.json()      //todo esto es lo mismo a lo de arriba
    //console.log(data);
    data.forEach(function(post) {
        const li = document.createElement('li');
        li.innerText =post.title;
        ul.append(li);
        
    });
    document.body.append(ul); 

}

loadData()
console.log('linea 2');