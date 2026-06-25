//reduce method
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function( acc, currVal){
//     console.log(`acc: ${acc} and current Value is: ${currVal} `);
//     return acc + currVal
// }, 0)


//now same thing with the arrow function
const myTotal = myNums.reduce( (acc, currValue) => (acc + currValue) , 0  )
console.log(myTotal);

