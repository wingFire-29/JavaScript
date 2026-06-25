const marvel=["Spiderman","Ironman", "Thor"]
const dc=["Superman","Batman", "Flash"]


const hero = marvel.concat(dc)
console.log(hero)


//concat returns a new array while push function only pushes the value
// spread an array by spread "..." operator does the same things

const arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr=arr.flat(3)
console.log(real_arr)