import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Calculator(){
  return (
    <h1>Todo React Calculator</h1>
  );
}

ReactDOM.render(<Calculator />,
  document.getElementById('root'));

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
