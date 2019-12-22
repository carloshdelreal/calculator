import React from 'react';

// eslint-disable-next-line sort-imports
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
