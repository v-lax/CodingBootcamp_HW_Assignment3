// Assignment Code
var generateBtn = document.querySelector("#generate");



//generatePassword function. Code that will execute when generateButton is clicked.
function generatePassword(){
  let result = '';

  let len = parseInt(prompt('How many characters would you like your password to be? Please input in a number between 8 and 128.'))
  while((len<8)||(len>128)||(Number.isNaN(len)==true)){
    alert('You did not input in a value between 8 and 128. Please Try again.')
    len = parseInt(prompt('How many characters would you like your password to be? Please input in a number between 8 and 128.'))
  }
    let lowerCase = confirm('Would you like to include lowercase letters in your password?');
    let upperCase = confirm('Would you like to include uppercase letters in your password?');
    let numbers = confirm('Would you like to include numbers in your password?');
    let specialChar = confirm('Would you like to include specialCharacters in your password?');
  
    while(lowerCase===false && upperCase===false && numbers===false && specialChar===false){
    alert('You must choose at least one criteria to include in your password')
     lowerCase = confirm('Would you like to include lowercase letters in your password?');
     upperCase = confirm('Would you like to include uppercase letters in your password?');
     numbers = confirm('Would you like to include numbers in your password?');
     specialChar = confirm('Would you like to include specialCharacters in your password?');
  }
    let possibleChar=[];
    let lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let upperArray = lowerArray.map(function(x){ return x.toUpperCase(); })
    let numArray = ['0','1','2','3','4','5','6','7','8','9']
    let specArray = [ '!','#','$','%','&','()','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']
        
        if(lowerCase===true){
          possibleChar.push(lowerArray)
        }

        if(upperCase===true){
          possibleChar.push(upperArray)
        }

        if(numbers===true){
          possibleChar.push(numArray)
        }

        if(specialChar===true){
          possibleChar.push(specArray)
        }
  for(var i=0;i<len;i++){
    var charSet = possibleChar[Math.floor(Math.random()*possibleChar.length)]
    var char = charSet[Math.floor(Math.random()*charSet.length)]
    result += char;  
  }

//Lines 54-68 please ignore. I was trying to check whether not there was at least one
//character from each of the criteria's selected by the user. I was using the "some" method
//which returns true if at least one element in the array matched the elements in another array.
// I never got around to figuring out how to check it against each array in my possibleChar array. 
// But i'll keep working towards it! 
//{let marks = [ 'a', 'B', 'C' ];
// let lessThanFive = marks.some(function(e){
//   for(var j=0;j<possibleChar.length;i++){
//     possibleChar[j].indexOf(e) >= 0
//   }
// });

// console.log('lessThanFive');
//   //var testArray = 'abc'
//   //const theStringIsGood = testArray.split('').some(function (word){
//         //possibleChar[0].includes(word)
//         //console.log(word)
//   //})
//   //console.log(theStringIsGood)}


  return result
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
