var passwordField = document.getElementById("password");
var button = document.getElementById("generate");
button.addEventListener("click", buildPasswordArray());

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

function buildPasswordArray(event) {
    var uselowercase = window.confirm("Do you need lower case letters?");
    event.preventDefault();
    if (uselowercase) {
        compileArray(lowerChar.split(""));
        console.log(passwordArray) 
    }


}

buildPasswordArray();
