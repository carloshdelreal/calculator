import React from 'react';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  render() {
    return (
      <div className="CalculatorApp">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
