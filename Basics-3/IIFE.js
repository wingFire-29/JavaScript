// IIFE = Immediately Invoked Function Expressions (IIFE)

function chai(){
    console.log("ChaiDB connected");
}
chai();

// if we want that this function should be called immediately after executinnh this func then 
// (function defination) (calling it)  wrap it in a parenthesis

(function coffee(){
    console.log("CoffeeDB connected");
})()
//in this format -- This is done to avoid the poluution caused by the global scope