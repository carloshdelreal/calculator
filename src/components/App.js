/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      operation: null,
      total: null,
    };
  }

  handleNumber(buttonName) {
    let { total, next } = this.state;
    const { operation } = this.state;
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
  }

  handleOperation(buttonName) {
    let { total, next, operation } = this.state;
    const calculator = { next, operation, total };
    if (operation === null || next === null) {
      if (buttonName === '+/-') {
        const { total: calcTotal } = calculate(calculator, buttonName);
        total = calcTotal;
      } else {
        operation = buttonName;
      }
    } else {
      const { total: calcTotal } = calculate(calculator, buttonName);
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
  }

  handleClick(buttonName) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const operations = ['+/-', '%', '/', 'X', '-', '+', '='];

    if (buttonName === 'AC' || this.state.total === 'Ma Error') {
      this.setState({
        next: null,
        operation: null,
        total: null,
      });
      return;
    }

    if (numbers.includes(buttonName)) {
      const { next, operation, total: newTotal } = this.handleNumber(buttonName);
      this.setState({
        next,
        operation,
        total: newTotal,
      });
      return;
    }

    if (operations.includes(buttonName)) {
      const { next, operation, total: newTotal } = this.handleOperation(buttonName);
      this.setState({
        next,
        operation,
        total: newTotal,
      });
    }
  }

  render() {
    let value = null;
    if (this.state.operation === null) {
      value = this.state.total ? this.state.total : '0';
    } else {
      value = this.state.next ? this.state.next : this.state.total;
    }
    return (
      <div className="CalculatorApp">
        <Display value={value} />
        <ButtonPanel onClick={(buttonName) => this.handleClick(buttonName)} />
      </div>
    );
  }
}

export default App;
