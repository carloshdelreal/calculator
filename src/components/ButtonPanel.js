import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  render() {
    const btnLabel = 'hello';
    return (
      <div>
        <Button btnLabel={btnLabel} />
        <Button btnLabel="1" />
        <Button btnLabel="2" />
        <Button btnLabel="3" />
        <Button btnLabel="4" />
        <Button btnLabel="5" />
        <Button btnLabel="6" />
        <Button btnLabel="7" />
        <Button btnLabel="8" />
        <Button btnLabel="9" />
      </div>
    );
  }
}

export default ButtonPanel;
