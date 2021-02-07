/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

function isSymbol(item){
  let symbols = ["!", "#", "$", "%", ".", "*", "&"];
  let isVal =  symbols.includes(item)
  return isVal;
}
function hasUpperCase(password) {
  const regex = /[A-Z]/g;
  const found = password.match(regex);
  return found !== null;
}
function hasLowerCase(password) {
  const regex = /[a-z]/g;
  const found = password.match(regex);
  return found !== null;
}
function validatePasswords(passwords) {
  let result = [];

  for (let i=0; i<passwords.length;i++){
    
    result[i] = false;

    let isDifferent = true;
    for(let j=0; j<i;j++){
      if (j !== i && passwords[j] === passwords[i]) {
        isDifferent=false
      }
    }
    if (isDifferent && passwords[i].length>=5){
      if(hasUpperCase(passwords[i])){
        if (hasLowerCase(passwords[i])) {
          let hasNumber = passwords[i].split('').some((item) => !isNaN(item * 1));
          if (hasNumber) {
            if (passwords[i].split('').some(item=>isSymbol(item))) {
              result[i] = true;
            }
          }
        }
      }

    }
  }
  return result;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);
