// luknator password generato
// GenerateBtn
var generateBtn = document.querySelector("#generate");

// Define variables
var selectLowerCase;
var selectUpperCase;
var selectNumber;
var selectSpecial;

// Set variables  
var plength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// Uppercase conversion
var upperCase = lowerCase.toUpperCase();
var numbers = "1234567890";
var specialCharacter = "!#$%&'()*+,-./:;?@][^_`{|}~'<=>";
var userPassword = "";
var passwordGroup = "";
var plength;
var selectLowerCase;
var selectUpperCase;
var selectNumber;
var selectSpecial;

// Function writes password to the #password input
function writePassword() {

    // Request length of the password
    plength = parseInt(prompt("Luknator Welcome to Password Generator. To begin, please choose a length of your password from 8-128.", ""));

    // Require number
    while (isNaN(plength)) {
        plength = parseInt(prompt("This is not a number. Please enter a number between 8 - 128.", ""));
    }

    // Require length    
    while (plength < 8 || plength > 128) {
        plength = parseInt(prompt("Enter length of password.* Length must be between 8 - 128 characters", ""));
    }

    // Confirm lower case letters 
    selectLowerCase = confirm("Use lower case letters?");
    // Confirm upper case letters
    selectUpperCase = confirm("Use upper case letters?");
    //Confirm numeric characters 
    selectNumber = confirm("Use numbers?");
    //Confirm special characters
    selectSpecial = confirm("Use special characters?");

    var password = generatePassword();
    document.querySelector("#password").value = password;

}

// Clicking btn runs funtion
generate.addEventListener("click", writePassword);


// Call function to generate password 
generatePassword();

// Write generated password on page
document.getElementById("password").innerHTML = userPassword;

// From selected options randomly generate password.
function generatePassword() {
    userPassword = "";
    if (selectLowerCase) {
        passwordGroup += lowerCase;
    }
    if (selectUpperCase) {
        passwordGroup += upperCase;
    }
    if (selectNumber) {
        passwordGroup += numbers;
    }
    if (selectSpecial) {
        passwordGroup += specialCharacter;
    }
    for (let i = 0; i < plength; i++) {
        userPassword += passwordGroup.charAt(
            Math.floor(Math.random() * passwordGroup.length)
        );
    }
    return userPassword;
}

// COPY FUNCTION 
var copy = document.querySelector("#copy");
copy.addEventListener("click", function() {
    copyPassword();
});

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}