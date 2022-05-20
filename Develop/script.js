// Assignment code here
//initial question
// pwlength = window.prompt("How many characters would you like in your password?");

var pwlength = window.prompt("How many characters would you like in your password?");
 //window.alert("you chose " + pwlength)
 

//pwlength()
//based on answer return a specific number
//var pwlength ()

//case questions
var upperCaseQ = function() {
var upperCaseQ = window.prompt("Do you need Upper Case letters?");
if (upperCase === "No")  {
  window.alert("you have chosen no");
  lowerCaseQ()
}
//if no move to next or skip
else {
  var upperCase = Math.floor(Math.random() * 1, 27);
  
}
};
upperCaseQ()

var lowerCaseQ = function() {
var lowerCaseQ = window.prompt("Do you need lower case letters?");
if (lowerCase === "No") {
  NumbersQ()
}
else {
  var lowerCase = Math.floor(Math.random() * 1, 27);
  //return value;
};
}
lowerCaseQ()
//Numbers question

var NumbersQ = function() {
  var NumbersQ = window.prompt("Inlcude a number?");
if (NumbersQ === "No") {
  SpecialsQ()
}
else {
  var Numbers = Math.floor(Math.random())
}
}
function NumbersQ() {

}
NumbersQ()
//Special characters
var Specials = window.prompt("Any special characters ex. #$*@?");
function SpecialsQ() {

}
SpecialsQ()
//randomize above and add results also in a random order

var passwordGen =([upperCase, lowerCase, Numbers, Specials]); {
  console.log(passwordGen);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//start generator 
pwlength ()
//use 