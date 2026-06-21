// when declared a var variable inside a function, it alters the global variable with the same name so it is not used
// {}=these are called scopes  
let a = 300
if(true){
    let a = 10
    const b = 5

    console.log("Inner variable: ", a);    
}
console.log("outer variable: ", a);