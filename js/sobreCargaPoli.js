function countItems(x) {
    return x.toString().length;
}
console.log(countItems("yeiko"));

//function countItems(y){
   // return y.toString().length;
//}
console.log(countItems(2000));

function sum(x=0,y=0,z=0) {
    return x+y+z;
    
}
console.log("Primer suma "+ sum());
console.log("Segunda suma "+ sum(5,5,5));