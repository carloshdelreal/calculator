import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  handleClick(buttonName) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onClick(buttonName);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    return (
      <div>
        <div className="container">
          <Button btnLabel="AC" onClick={() => this.handleClick('AC')} />
          <Button btnLabel="+/-" onClick={() => this.handleClick('+/-')} />
          <Button btnLabel="%" onClick={() => this.handleClick('%')} />
          <Button
            btnLabel="/"
            color="orange"
            onClick={() => this.handleClick('/')}
          />
        </div>
        <div className="container">
          <Button btnLabel="7" onClick={() => this.handleClick('7')} />
          <Button btnLabel="8" onClick={() => this.handleClick('8')} />
          <Button btnLabel="9" onClick={() => this.handleClick('9')} />
          <Button
            btnLabel="X"
            color="orange"
            onClick={() => this.handleClick('X')}
          />
        </div>
        <div className="container">
          <Button btnLabel="4" onClick={() => this.handleClick('4')} />
          <Button btnLabel="5" onClick={() => this.handleClick('5')} />
          <Button btnLabel="6" onClick={() => this.handleClick('6')} />
          <Button
            btnLabel="-"
            color="orange"
            onClick={() => this.handleClick('-')}
          />
        </div>
        <div className="container">
          <Button btnLabel="1" onClick={() => this.handleClick('1')} />
          <Button btnLabel="2" onClick={() => this.handleClick('2')} />
          <Button btnLabel="3" onClick={() => this.handleClick('3')} />
          <Button
            btnLabel="+"
            color="orange"
            onClick={() => this.handleClick('+')}
          />
        </div>
        <div className="container">
          <Button btnLabel="0" onClick={() => this.handleClick('0')} wide />
          <Button btnLabel="." onClick={() => this.handleClick('.')} />
          <Button
            btnLabel="="
            color="orange"
            onClick={() => this.handleClick('=')}
          />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
