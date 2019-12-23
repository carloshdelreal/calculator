import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  return (
    <div>
      <div>
        <Button btnLabel="AC" />
        <Button btnLabel="+/-" />
        <Button btnLabel="%" />
        <Button btnLabel="/" />
      </div>
      <div>
        <Button btnLabel="7" />
        <Button btnLabel="8" />
        <Button btnLabel="9" />
        <Button btnLabel="X" />
      </div>
      <div>
        <Button btnLabel="4" />
        <Button btnLabel="5" />
        <Button btnLabel="6" />
        <Button btnLabel="-" />
      </div>
      <div>
        <Button btnLabel="1" />
        <Button btnLabel="2" />
        <Button btnLabel="3" />
        <Button btnLabel="+" />
      </div>
      <div>
        <Button btnLabel="0" />
        <Button btnLabel="," />
        <Button btnLabel="." />
        <Button btnLabel="=" />
      </div>
    </div>
  );
};

export default ButtonPanel;
