import PropTypes from 'prop-types';
import React from 'react';

const Display = () => {
  const value = '0';
  return (
    <div className="container display-container">
      <div className="display">
        {value}
      </div>
    </div>
  );
};

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
