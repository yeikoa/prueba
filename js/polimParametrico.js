//Parametros de cualquier tipo(Genericos)
function Stack(){
    this.items = [];

    this.push = function(item){
        this.items.push(item);
    }


}
const stack = new Stack();
stack.push("yeikoooo");
const stack2 = new Stack();
stack2.push(200);

console.log(stack);
console.log(stack2);