import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
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
    <button
      className={classes}
      // eslint-disable-next-line react/destructuring-assignment
      onClick={props.onClick}
      type="button"
    >
      {btnLabel}
    </button>
  );
};

Button.defaultProps = {
  color: '',
  wide: false,
};

Button.propTypes = {
  btnLabel: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/boolean-prop-naming
  wide: PropTypes.bool,
};

export default Button;
