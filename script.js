var passwordField = document.getElementById("password");
var button = document.getElementById("generate");
button.addEventListener("click", buildPasswordArray)

//all possible characters in password
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var numberChar = "123456789"
var specialChar = '"!@#$%^&*()*?\"'

var passwordArray = []


//add characters to passwordArray from array of the characters
function compileArray(array) {
    for (var i = 0; i <array.length; i++) {
    passwordArray.push(array[i])    
    } 
}

//set criteria for password
function buildPasswordArray(event) {
  //event.preventDefault();

    passwordLength = window.prompt("How many characters in your password?"); 
       if (passwordLength) {}
         
//compile and string characters   

    var uselowercase = window.confirm("Do you need lower case letters?");
        if (uselowercase) {
        compileArray(lowerChar.split(""));
        
    }
    var useUpperCase = window.confirm("Do you need Upper Case letters?");
        if (useUpperCase) {
        compileArray(upperChar.split(""));
    }
    var useNumbers = window.confirm("Inlcude a number?");
        if (useNumbers) {
        compileArray(numberChar.split(""));
        }
    
    var useSpecials = window.confirm("Any special characters ex. #$*@?");
        if (useSpecials) {
        compileArray(specialChar.split(""));
        }

        console.log(passwordArray) 
}

//random numbers by selected length 
buildPasswordArray();

function generatePassword(array) {
    var newPassword = []
    for (var i = 0; i < passwordLength; i++) {
      newPassword.push(array[Math.floor(Math.random() * array.length)])  
    }
//console.log(newPassword)
document.getElementById("password").innerHTML = (newPassword)
}
generatePassword(passwordArray);

