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

function generatePassword () {
  let passwordLength = prompt("Please select how many characters long you would like your password to be; your password can only be between 8-128 characters long.");
  console.log(passwordLength)
  if (passwordLength <= 7 || passwordLength >= 129) {
    alert("Please try again, this does not reach the minimum requirements");
    generatePassword ();
  }
  let UpperCase = confirm("Would you like Uppercase letters in your password?");
  console.log(UpperCase)
  let LowerCase = confirm("Would you like Lowercase letters in your password? ");
  console.log(LowerCase)
  let Number = confirm("Would you like Numbers in your password");
  console.log(Number)
  let Symbol = confirm("Would you like Symbols in your password");
  console.log(Symbol)
  // This is an if statement for if they all come back false 
  if (UpperCase === false && LowerCase === false && Number === false && Symbol === false) {
    alert("Please pick at least one character type!");
    generatePassword ();
  }
  // This is the variable for the amount of selected characters they want
  let Count = "";
  // This is the variable for the selected characters they want
  let RandomPassword = "";
  // This will help decide how many of each character I want in the password which is supposed to be randomized
  let minimumUpper = "";
  let minimumLower = "";
  let minimumNumber = "";
  let minimumSymbol = "";
  const specialChars = "!@#$%^&*|~"
  const retrieveCharArrays = {
    getLowerCase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
    },
    getUpperCase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
    },
    getNumber: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
    },
    getSymbol: function () {
      return specialChars[Math.floor(Math.random() * specialChars.length)]
    }
  }
  if (LowerCase === true) {
    minimumLower = retrieveCharArrays.getLowerCase();
    console.log(minimumLower)
    Count++;
  }
  if (UpperCase === true) {
    minimumUpper = retrieveCharArrays.getUpperCase();
    console.log(minimumUpper)
    Count++;
  }
  if (Number === true) {
    minimumNumber = retrieveCharArrays.getNumber();
    console.log(minimumNumber)
    Count++;
  }
  if (Symbol === true) {
    minimumSymbol = retrieveCharArrays.getSymbol();
    console.log(minimumSymbol)
    Count++;
  }
 
  // parseInt converts the string into an integer
  // i is 0 and if 0 is less than the password length minus the minimum count then continue to iterate
  for (let i = 0; i < (parseInt(passwordLength)-Count);i++) {
    let randomNumberPicked = Math.floor(Math.random() * 4)
    RandomPassword += randomNumberPicked
  }
  // this is adding the random characters types into the password
  RandomPassword += minimumLower
  RandomPassword += minimumNumber
  RandomPassword += minimumSymbol
  RandomPassword += minimumUpper
  let passwordDisplay = document.querySelector("#password")
  console.log(RandomPassword)
  passwordDisplay.append(RandomPassword)
  return RandomPassword
} 
