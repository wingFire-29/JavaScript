const user = {
    username: "Parag",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this);//refers to the object in which it exists
    }
}
// console.log(typeof(user));
const {welcomeMessage:welcum} = user
// console.log(welcum);

const {username:name} = user
// console.log(name);

// user.welcomeMessage()
user.username = "Sam"
user.price= "899"
// user.welcomeMessage()

// console.log(this);//refers to the empty object in node env 

function indra(){
    let username = "Parag"
    console.log(this.username);//cannot do this because this keyword only use to accessible in a object not a function

}
// indra()



//Basic arrow function
// const addTwo = (num1, num2) => {
//     return num1+num2
// }

//implicit return arrow function
// const addTwo = (num1,num2) => (num1 + num2)
//it will work like this for normal variables

const addTwo = (num1,num2) => ({username:"Parag"})//this parenthesis is important while using objects

console.log(addTwo(3,4));
