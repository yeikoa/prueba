
function Company(name){
    let employees = [];
    this.name = name;

    this.getEmployees = function(){
        return employees;
    }
    this.addEmployees = function(employee){
        employees.push(employee);
    }
}
const company = new Company("Coca cola");
const company2 = new Company("Pepsi");

console.log(company);
console.log(company2);

company.addEmployees({name: "Josue"});
company2.addEmployees({name: "Carlo"});

console.log(company2.getEmployees());
console.log(company.getEmployees());