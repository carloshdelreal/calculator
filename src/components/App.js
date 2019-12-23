import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    console.log(buttonName)
    // const calculator = { next: this.state, total: this.state };
    // const { total } = calculate(calculator, buttonName);
    // this.setState({
    //   total: total,
    // });
  }

  render() {
    return (
      <div className="CalculatorApp">
        <Display total={this.state} />
        <ButtonPanel onClick={(buttonName) => this.handleClick(buttonName)} />
      </div>
    );
  }
}

export default App;
