// Assignment code here
var passwordField = document.getElementById("password");
  function genPassword() {
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numberChar = "123456789"
var specialChar = '"!@#$%^&*()*?\"'
var passwordLength = pwlength
var password = "";

// for (var i = 0; i <= passwordLength; i++) {
//   var randomNumber = Math.floor(Math.random() *passwordGen.length);
//   password += passwordGen.substring(randomNumber, randomNumber +1);
// }
// document.getElementById("password").value = password;
  }

function passwordChar = {upperChar: "", lowerChar: "", numberChar: "", specialChar: ""};
passwordLength = passwordChar.length;

var text = "";
for (var i = 0; i <passwordLength; i++) {
  text += "";

  document.getElementById("password").innerHTML = text;
}


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
  var upperCase = Math.floor(Math.random() * 27);
  console.log(upperCase)
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
 // return value;
};
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

//var passwordGen =([upperCase, lowerCase, Numbers, Specials]); {
 // console.log(passwordGen);
//}



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
//pwlength ()
//use 