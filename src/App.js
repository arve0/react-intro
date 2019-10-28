import React, { useState } from 'react';

function App() {
  let [counts, setCounts] = useState([])

  function add() {
    setCounts([...counts, 0])
  }

  function inc(index) {
    counts[index] += 1;
    setCounts([...counts]);
  }

  return (
    <div>
      <p>hallo</p>
      <button onClick={add}>add counter</button>
      {counts.map((value, index) =>
        <Count value={value} inc={() => inc(index)} />
      )}
    </div>
  );
}

function Count({value, inc}) {
  return (
    <p>
      {value}
      <button onClick={inc}>+</button>
    </p>
  )
}

export default App;
