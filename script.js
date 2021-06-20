// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

var pwLength = window.prompt("Password length (8-128 characters)");
var confirmNumbers = window.confirm("Use numeric characters?");
var confirmUppercase = window.confirm("Use uppercase characters?");
var confirmLowercase = window.confirm("Use lowercase characters?");
var confirmSpecial = window.confirm("Use special characters?");

// Number
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Alphabet
lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Special characters
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];


// Converts to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};

uppercaseLetters = lowercaseLetters.map(toUpper);

console.log(uppercaseLetters);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page