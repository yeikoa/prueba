const user={
    name: "yeiko",
    age: 20
};
function printInfo(usernew){
    const{name, age}= user;

    console.log(name, age);
    return "<h1>hola " +name+ " </h1>";
}
console.log(printInfo(user));

document.body.innerHTML = printInfo(user);