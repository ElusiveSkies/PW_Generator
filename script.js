// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
};


var display;

// Number
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Alphabet
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Special characters
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];


// Converts to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};

uppercaseLetters = lowercaseLetters.map(toUpper);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var pwLength = window.prompt("Desired Password length (8 to 128 characters)")
  // Insures that appropriate number of values are used
    if (pwLength < 8 || pwLength > 128) {
      alert("You must choose between 8 and 128 characters!");

  } else {
    // Continues to confirm preferences on which characters are used
    
    var confirmLowercase = window.confirm("Use lowercase characters?");
    var confirmUppercase = window.confirm("Use uppercase characters?");
    var confirmNumbers = window.confirm("Use numeric characters?");
    var confirmSpecial = window.confirm("Use special characters?");
  };
    // Zero confirmations
    if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecial) {
      alert("You must choose at least one set of characters!");

    // Four confirmations
    } else if (confirmLowercase && confirmUppercase && confirmNumbers && confirmSpecial) {
      display = lowercaseLetters.concat(uppercaseLetters, numbers, special);

    // Three confirmations
    } else if (confirmLowercase && confirmUppercase && confirmNumbers) {
      display = lowercaseLetters.concat(uppercaseLetters, numbers);

    } else if (confirmLowercase && confirmUppercase && confirmSpecial) {
      display = lowercaseLetters.concat(uppercaseLetters, special);

    } else if (confirmLowercase && confirmNumbers && confirmSpecial) {
      display = lowercaseLetters.concat(numbers, special);

    } else if (confirmUppercase && confirmNumbers && confirmSpecial) {
      display = uppercaseLetters.concat(numbers, special);

    // Two confirmations
    } else if (confirmLowercase && confirmNumbers) {
      display = lowercaseLetters.concat(numbers);

    } else if (confirmLowercase && confirmSpecial) {
      display = lowercaseLetters.concat(special);

    } else if (confirmLowercase && confirmUppercase) {
      display = lowercaseLetters.concat(uppercaseLetters);

    } else if (confirmUppercase && confirmNumbers) {
      display = uppercaseLetters.concat(numbers);

    } else if (confirmUppercase && confirmSpecial) {
      display = uppercaseLetters.concat(special);

    } else if (confirmNumbers && confirmSpecial) {
      display = numbers.concat(special);
    
    // One confirmation
    } else if (confirmLowercase) {
      display = lowercaseLetters;
    
    } else if (confirmUppercase) {
      display = uppercaseLetters;

    } else if (confirmNumbers) {
      display = numbers;

    } else if (confirmSpecial) {
      display = special;
    };

    // Created variable to contain randomized choices
    var pw =[];

    // Created equation to randomly select the correct number of variables
    for (var i = 0; i < pwLength; i++) {
      var pickChoices = display[Math.floor(Math.random() * display.length)];
      pw.push(pickChoices);
      password = pw.join("");
      
    // Moved given code to add password to page
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
    };
};