import operate from './operate';
/* eslint-disable no-param-reassign */

// eslint-disable-next-line max-statements

const calc = (calculator, buttonName) => {
  const { operation, next } = calculator;
  let { total } = calculator;
  const minusOne = -1;
  if (buttonName === '+/-') {
    total *= minusOne;
    calculator.total = total.toString();
  } else {
    calculator.total = operate(total,
      next,
      operation);
    calculator.operation = operation;
  }
  return calculator;
};

const handleNumber = (calculator, buttonName) => {
  let { total, next } = calculator;
  const { operation } = calculator;
  if (operation === null) {
    if (total === null) {
      total = buttonName;
    } else {
      total += buttonName;
    }
  } else if (next === null) {
    next = buttonName;
  } else {
    next += buttonName;
  }
  return { next, operation, total };
};

const handleOperation = (calculator, buttonName) => {
  let { next, operation, total } = calculator;
  if (operation === null || next === null) {
    if (buttonName === '+/-') {
      const { total: calcTotal } = calc(calculator, buttonName);
      total = calcTotal;
    } else {
      operation = buttonName;
    }
  } else {
    const { total: calcTotal } = calc(calculator, buttonName);
    if (buttonName === '=') {
      next = null;
      total = calcTotal;
    } else {
      next = null;
      operation = buttonName;
      total = calcTotal;
    }
  }
  return { next, operation, total };
};

const calculate = (calculator, buttonName) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const operations = ['+/-', '%', '/', 'X', '-', '+', '='];
  let { next, operation, total } = calculator;

  if (buttonName === 'AC' || total === 'Ma Error') {
    ({ next, operation, total } = { next: null, operation: null, total: null });
  } else if (numbers.includes(buttonName)) {
    ({ next, operation, total } = handleNumber(calculator, buttonName));
  } else if (operations.includes(buttonName)) {
    ({ next, operation, total } = handleOperation(calculator, buttonName));
  }

  return { next, operation, total };
};

export default calculate;
