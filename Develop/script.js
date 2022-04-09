// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let arrayFromLowToHigh = (low, high) => {
  const array = [];
  for(let i = low; i<= high; i++) {
    array.push(i);
  }
  return array;
};
// Generating Character Codes
const UpperCase_Codes = arrayFromLowToHigh(65,90);
const LowerCase_Codes = arrayFromLowToHigh(97, 122);
const Number_Codes = arrayFromLowToHigh(48, 57);
const Symbol_Codes = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

function generatePassword () {
  UpperCase_Codes;
  LowerCase_Codes;
  Number_Codes;
  Symbol_Codes;
  var passwordLength = Number(prompt("Please select how many characters long you would like your password to be; your password can only be between 8-128 characters long."));
  if (passwordLength >= 8 && passwordLength <= 128) {
  }
}
function characterPool(){
  let charCodes = [];
  if (confirm("Would you like to include Uppercase letters in your password?")) {
    charCodes = charCodes.concat(UpperCase_Codes);
  }
  if (confirm("Would you like to include Lowercase letters in your password")) {
    charCodes = charCodes.concat(LowerCase_Codes);
  }
  if (confirm("Would you like to include Numbers in your password")) {
    charCodes = charCodes.concat(Number_Codes);
  }
  if (confirm("Would you like to include Symbols in your password")) {
    charCodes = charCodes.concat(Symbol_Codes);
  }
}
function randomGenerator(someValue){

  return Math.floor(Math.random() * someValue);
}