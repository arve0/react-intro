import React from 'react';

function Counter(props) {
  let { count } = props;

  return (
    <p>
      count: {count}
      <button onClick={props.onClick}>+</button>
    </p>
  )
}

export default Counter;
