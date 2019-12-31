import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  return (
    <div className="CalculatorApp">
      <Display />
      <ButtonPanel />
    </div>
  );
};

export default App;
