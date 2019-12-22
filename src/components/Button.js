// import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
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
