const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  const numberOneBig = new Big(numberOne);
  const numberTwoBig = new Big(numberTwo);
  let result = null;
  const oneHundred = 100.0;
  switch (operation) {
    case '-':
      result = numberOneBig.minus(numberTwoBig);
      break;
    case '+':
      result = numberOneBig.plus(numberTwoBig);
      break;
    case '*':
      result = numberOneBig.times(numberTwoBig);
      break;
    case '/':
      result = numberOneBig.div(numberTwoBig);
      break;
    case '%':
      result = numberOneBig.times(numberTwoBig).div(oneHundred);
      break;
    default:
      result = '0';
      break;
  }
  return result;
};

export default operate;
