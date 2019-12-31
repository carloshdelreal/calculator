const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  const numberOneBig = Big(numberOne);
  const numberTwoBig = Big(numberTwo);
  let result = null;
  const oneHundred = 100.0;
  const zero = '0';
  if (operation === '/' && numberTwo === zero) {
    return 'Ma Error';
  }
  switch (operation) {
    case '-':
      result = numberOneBig.minus(numberTwoBig);
      break;
    case '+':
      result = numberOneBig.plus(numberTwoBig);
      break;
    case 'X':
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
  return result.toString();
};

export default operate;
