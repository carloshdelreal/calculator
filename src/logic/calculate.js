import operate from './operate';
/* eslint-disable no-param-reassign */

const calculate = (calculator, buttonName) => {
  let { total, next } = calculator;
  const minusOne = -1;
  if (buttonName === '+/-') {
    total *= minusOne;
    next *= minusOne;
    calculator.total = total;
    calculator.next = next;
  } else {
    operate(total, next, buttonName);
    calculator.total = total;
  }

  return calculator;
};

export default calculate;
