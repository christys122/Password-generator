// Assignment code here
//initial question
window.prompt("How many characters would you like in your password?");

function pwlength (){
  
}
pwlength()
//based on answer return a specific number
//var pwlength ()

//case questions
window.prompt("Do you need Upper Case letters?");
//upperCase()

window.prompt("Do you need lower case letters?");
//lowerCase()
//Numbers question

window.prompt("Inlcude a number?");
//Number()
//Special characters
window.prompt("Any special characters ex. #$*@?");
//Specials()

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
