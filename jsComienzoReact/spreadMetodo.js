/* const names = ['yeiko','allison','mere'];
const newNames =['raul','jose','pablo']; */
const user={
    name: 'yeiko',
    lastname: "Artavia"
};
const addres ={
    street: "main",
    city: "Salakito"
};
const userInfo ={
    ...user, 
    ...addres
}
console.log(userInfo);
console.log(user);