import React from 'react';

const Display = (props) => {
  // eslint-disable-next-line react/prop-types
  const { value } = props;
  return <div>{value}</div>;
};

export default Display;
