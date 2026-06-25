// IIFE = Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log("ChaiDB connected");
}
chai();

// if we want that this function should be called immediately after executinnh this func then 
// (function defination) (calling it)  wrap it in a parenthesis

(function coffee(){
    console.log("CoffeeDB connected");
})(); //semicolon is must to use to avoid any type of errors
//in this format -- This is done to avoid the poluution caused by the global scope


// arrow function declaration using iife
((name)=>{console.log(`${name} connected`);})('vanilaDB')
