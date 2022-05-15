// Assignment code here
//initial question
var pwlength = window.prompt("How many characters would you like in your password?");

function pwlength (){
  
}
pwlength()
//based on answer return a specific number
//var pwlength ()

//case questions
var upperCase = window.prompt("Do you need Upper Case letters?");
function upperCase () {

}
upperCase ()

var lowerCase = window.prompt("Do you need lower case letters?");
function lowerCae (){

}
lowerCase()
//Numbers question

var Numbers = window.prompt("Inlcude a number?");
function Numbers () {

}
Numbers()
//Special characters
var Specials = window.prompt("Any special characters ex. #$*@?");
function Specials () {
  
}
Specials()

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
