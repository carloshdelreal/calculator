import PropTypes from 'prop-types';
import React from 'react';

const Display = (props) => {
  const { value } = props;
  return <div>{value}</div>;
};

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
