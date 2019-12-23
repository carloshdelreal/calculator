import React from 'react';

const Display = (props) => {
  // eslint-disable-next-line react/prop-types
  const { value } = props;
  return <div>{value}</div>;
};

/*
 * Display.propTypes = {
 *   value: PropTypes.string.re,
 * };
 */

export default Display;
