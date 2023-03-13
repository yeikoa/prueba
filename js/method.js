//metodos = funciones, methods = funtion
const user = {
    name: "Yeiko",
    lastname: "Artavia",
    age: 30,

    showFullName() {
       return this.name + " " + this.lastname;
    }
};
console.log(user.showFullName());

const account={
    number:"123454565656",
    amount: 100,
    deposit(quantity){
        this.amount = this.amount+quantity
    },
    withdraw(quantity){
        this.amount = this.amount - quantity
    }
}
account.deposit(200);
account.deposit(200);
console.log(account.amount);
account.withdraw(100);
account.withdraw(50);
account.withdraw(50);
console.log(account.amount);