// import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { btnLabel, color, wide } = props;
  let classes = 'calc-button';
  if (color) {
    classes += ' ';
    classes += color;
  }
  if (wide) {
    classes += ' ';
    classes += 'basis-50';
  }
  return (
    <button className={classes} type="button">
      {btnLabel}
    </button>
  );
};

// Button.propTypes = {
//   btnType: PropTypes.string.isRequired,
// };

export default Button;
