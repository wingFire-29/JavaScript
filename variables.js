const accountId=12345
let accEmail="ps@gmail.com"
var accPassword="12345678"
accCity="Chandigarh"
let accState;

/*
//prefer not to use var
bcz of issue in block scope and functional scope
const variables are constant do not change values
*/



// variables that can be changed
accEmail="psps@gmail.com"
accPass="21221212"
accCity="Hyderabad"


console.table([accountId, accEmail, accPass, accCity])