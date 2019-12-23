import operate from './operate';
/* eslint-disable no-param-reassign */

const calculate = (calculator, buttonName) => {
  const { operation, next } = calculator;
  let { total } = calculator;
  const minusOne = -1;
  if (buttonName === '+/-') {
    total *= minusOne;
    calculator.total = total;
  } else {
    calculator.total = operate(total, next, operation);
  }

  return calculator;
};

export default calculate;
