const name="Parag"
const repo=25


// dont use this method of string concatenation
// console.log( "Master "+name+ repo + " repos")

// dont use this method of string concatenation instead use backticks
// console.log(`Hello my name is ${name} and my repo count is ${repo}`)
// this method is called string interpulation


const gameName = new String('ParagNova')
// console.log(gameName[0])
// console.log(gameName.length)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('N'))


// Slicing
const newName=gameName.substring(0,5)
console.log(newName)


