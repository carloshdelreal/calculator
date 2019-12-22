import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => {
  return (
    <div className="CalculatorApp">
      <Display />
      <ButtonPanel />
    </div>
  );
};

export default App;
