import React, { useState } from 'react';
import Count from "./Count";

function App() {
  let [counts, setCounts] = useState([3, 2, 1]);

  function handleClick(index) {
    console.log(index)
    counts[index] += 1;
    setCounts(counts.slice(0))
  }

  return (
    <div>
      <p>hallo</p>
      {counts.map((count, index) =>
        <Count onClick={() => handleClick(index)} count={count} />
      )}
    </div>
  );
}

export default App;
