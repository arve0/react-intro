import React, { useState } from 'react';
import ViseVariabler from "./ViseVariabler";

function App() {
  let [sendt, setSendt] = useState(0);

  function handleClick(value) {
    console.log(value)
    setSendt(sendt + 1)
  }

  return (
    <div>
      <p>hallo</p>
      <ViseVariabler sendt={sendt} onClick={handleClick} />
    </div>
  );
}

export default App;
