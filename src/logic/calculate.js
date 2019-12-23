import operate from './operate';
/* eslint-disable no-param-reassign */

// eslint-disable-next-line max-statements
const calculate = (calculator, buttonName) => {
  const { operation, next } = calculator;
  let { total } = calculator;
  const minusOne = -1;
  if (buttonName === '+/-') {
    total *= minusOne;
    calculator.total = total.toString();
  } else {
    calculator.total = operate(total, next, operation);
    calculator.operation = operation;
  }
  return calculator;
};

export default calculate;
