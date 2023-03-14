const names = ['yeiko','allison','mere'];
var newNames =['raul','jose','pablo'];

 console.log(names.concat(newNames));
 console.log(names);
 console.log(newNames);

/* for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element);
}LLeva muchas lineas de codigo y en react se van a utilizar metodos que estan relacionados con los arreglos */


/* names.forEach(element = (name) => {
    console.log(name);
}); Sirve pero en react se suele utilizar map*/

/* const newNames= names.map((name) =>{
    return `Hola ${name}`
})
console.log(newNames);
console.log(names);Metodo map para crear otro arreglo apartir del que ya se tiene */

/* const nameFound= names.find((name)=>{
    if(name === 'mere'){
        return `Se encontro a: ${name}`;
    }
})
console.log(nameFound); Metodo find*/

/* const nameFilter = names.filter((name)=>{ 
    if(name!=='yeiko' ){//===
        return name;
    }

})
console.log(nameFilter); filtrar nombres */