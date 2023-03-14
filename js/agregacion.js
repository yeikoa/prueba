const company = {
    name: "intel",
    employees:[]
};

class Person{
    constructor(name,lastName){
        this.name = name
        this.lastName = lastName
    }
}
const pedro = new Person("Pedro", "Arrieta");
const ricardo = new Person("Ricardo", "Retana");

company.employees.push(pedro);
company.employees.push(ricardo);

console.log(ricardo);
console.log(pedro);

console.log(company);

