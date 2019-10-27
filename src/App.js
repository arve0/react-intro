import React from 'react';
import ViseVariabler from "./ViseVariabler";

function App() {
  let sendt = 0

  function handleClick(value) {
    console.log(value)
    sendt += 1 // feil med vilje, state er neste steg
  }

  return (
    <div>
      <p>hallo</p>
      <ViseVariabler sendt={sendt} onClick={handleClick} />
    </div>
  );
}

export default App;
