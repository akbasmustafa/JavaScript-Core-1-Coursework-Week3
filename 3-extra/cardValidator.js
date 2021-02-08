
//Function 'isValid' check validity of card number
//Input:Card Number
//Output:Boolean(true, false)
function isValid(cardNumber) {
  const cardArray = cardNumber.split("").map(item=>parseInt(item));

  const isAllNumber = cardArray.every((item) => !isNaN(item))
  const isAllSame = cardArray.every((item) => item === cardArray[0]);
  const isLastEven = cardArray[cardArray.length - 1] % 2 === 0;
  const SumBigger = cardArray.reduce((a, b) => a + b, 0);
  const isSumBigger = SumBigger>16

  if (
    cardArray.length === 16 &&
    isAllNumber &&
    !isAllSame &&
    isLastEven &&
    isSumBigger
  ) {
    return true;
  }
  return false;
}

//Test Case and Expected Result: True, True, False, False, False, False
console.log(isValid("9999777788880000"));    //valid
console.log(isValid("6666666666661666"));   //valid
console.log(isValid("a92332119c011112"));   //(invalid characters)
console.log(isValid("4444444444444444"));   //(only one type of number)
console.log(isValid("1111111111111110"));   //(sum less than 16)
console.log(isValid("6666666666666661"));   //(odd final number)
