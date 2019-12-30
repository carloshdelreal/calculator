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
    const { next, operation, total } = calculate(this.state, buttonName);
    this.setState({
      next,
      operation,
      total,
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
        <ButtonPanel onClick={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}

export default App;
