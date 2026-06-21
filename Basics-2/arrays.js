const myArr=[1,2,3,4,[5,6,7],8]
// console.log(myArr[4][2])

const myHeroes = ["Spiderman","Ironman", "Thor"]
const myArr2 = new Array(1,3,5,7,9)
// console.log(myArr2[1])


// Arrays method
// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop()

// myArr2.unshift(9)
// myArr2.shift()

console.log("Array before any op: " , myArr2)

const mySlicedArr = myArr2.slice(1,3);
console.log("Slicing done", mySlicedArr)
console.log("Array after slicing op: " , myArr2)

const spliceArr=myArr2.splice(2,2)
console.log("Splicing done" , spliceArr)
console.log("Array after Splicing op: " , myArr2)

