function SayMyName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("G");
}

// SayMyName()

function addTwoNumbers(num1,num2){
    return num1+num2
}
const result = addTwoNumbers(3,5)
// console.log("Result: ", result);


function loginUser(username){
    return `${username}, just logged in`
}
// loginUser("Parag")

// console.log(loginUser("Parag"));
// console.log(loginUser());

const Product={
    name: "Laptop",
    price: 99999
}

function handleObject(anyobject){ 
    //anyobject is a generic keyword so that any object can be passed in this function
     console.log(`Product name is ${anyobject.name} and its price is ${anyobject.price}`);
     
}
handleObject(Product);
