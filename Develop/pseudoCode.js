//get handle on generate button
//create function to ask questions prompts
//set length by answer to first question
//save answer in a variable
//ask character set questions (4 differnt boolean)
//If statement will generate array
//will need empty array 

var passwordArray = [];

var lowercase = ["a", "b", "c", "d", "e"]

var upperCase = ["A", "B", "C", "D", "E"]

var numbers = ["1", "2", "3"]


var passwordLength = 10
var userlowercase = true;
var useNumbers = true;
var useuppercase = false;



//console.log(newArray + " " + newArray.length);

//console.log(lowerCase + " " + lowercase.length);

function compileArray(array) {
    for(var i = 0; i < array.length; i++)
    passwordArray.push(array[i])
}

console.log("starting" + newArray);

function buildPasswordArray {
if (useNumbers) {
    compileArray(numbers)
}
if (uselowerCase) {
    compileArray(lowercase)
}
if (useuppercase) {
    compileArray(useuppercase)
}
}

buildPasswordArray();
console.log(passwordArray);

function generatePassword(array) {
    var newPassword = []
    for (var i = 0, i < passwordLength; i++) {
      newPassword.push(array[Math.floor(Math.random() * array.length)])  
    }
console.log(newPassword)
}
generatePassword(passwordArray);

//using math random and math floor

