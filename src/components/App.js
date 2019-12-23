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

  handleClick(buttonName) {
    const numbers = ['0', '1','2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const operations = ['+/-', '%', '/', 'X', '-', '+', '='];
    const { total, next, operation } = this.state;

    if (buttonName === 'AC') {
      this.handelAC();
      return;
    }

    if (numbers.includes(buttonName)) {
      if (operation === null) {
        if (total === null) {
          this.setState({
            total: buttonName,
          });
          return;
        }
        this.setState({
          total: total + buttonName,
        });
      } else {
        if (next === null) {
          this.setState({
            next: buttonName,
          });
          return;
        }
        this.setState({
          next: next + buttonName,
        });
      }
      return;
    }

    if (operations.includes(buttonName)) {
      const calculator = {
        next,
        operation,
        total,
      };
      if (operation === null || next === null) {
        if (buttonName === '+/-') {
          const { total: calcTotal } = calculate(calculator, buttonName);
          this.setState({
            total: calcTotal,
          });
        } else {
          this.setState({
            operation: buttonName,
          });
        }
      } else {
        const { total: calcTotal } = calculate(calculator, buttonName);
        if (buttonName === '=') {
          this.setState({
            next: null,
            total: calcTotal,
          });
        } else {
          this.setState({
            next: null,
            operation: buttonName,
            total: calcTotal,
          });
        }
      } 
    }
  }

  handelAC() {
    this.setState({
      next: null,
      operation: null,
      total: null,
    });
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
