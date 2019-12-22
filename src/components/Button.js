// import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  const { btnLabel } = props;
  return (
    <button className="calc-button" type="button">
      {btnLabel}
    </button>
  );
};

// Button.propTypes = {
//   btnType: PropTypes.string.isRequired,
// };

export default Button;
