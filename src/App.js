import React from 'react';
import ViseVariabler from "./ViseVariabler";

function App() {
  let sendt = "aaa"
  return (
    <div>
      <p>hallo</p>
      <ViseVariabler sendt={sendt} />
    </div>
  );
}

export default App;
