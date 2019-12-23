import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  return (
    <div>
      <div className="container">
        <Button btnLabel="AC" />
        <Button btnLabel="+/-" />
        <Button btnLabel="%" />
        <Button btnLabel="/" color="orange" />
      </div>
      <div className="container">
        <Button btnLabel="7" />
        <Button btnLabel="8" />
        <Button btnLabel="9" />
        <Button btnLabel="X" color="orange" />
      </div>
      <div className="container">
        <Button btnLabel="4" />
        <Button btnLabel="5" />
        <Button btnLabel="6" />
        <Button btnLabel="-" color="orange" />
      </div>
      <div className="container">
        <Button btnLabel="1" />
        <Button btnLabel="2" />
        <Button btnLabel="3" />
        <Button btnLabel="+" color="orange" />
      </div>
      <div className="container">
        <Button btnLabel="0" wide />
        <Button btnLabel="." />
        <Button btnLabel="=" color="orange" />
      </div>
    </div>
  );
};

export default ButtonPanel;
