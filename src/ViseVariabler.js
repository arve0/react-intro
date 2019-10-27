import React from 'react';

function ViseVariabler() {
  let t = "tekst"
  let n = 0
  let o = {
    k: 99
  }
  let ok = o.k
  let { k } = o; // destructuring
  let a = [1, 2, 3];
  let [første, andre, tredje] = a;

  return (
    <div>
      <p>t: {t}</p>
      <p>n: {n}</p>
      <p>o.k: {o.k}</p>
      <p>o.k: {ok}</p>
      <p>o.k: {k}</p>
      <p>a: {a}</p>
      <ul>
        {a.map((verdi, indeks) =>
          <li>{indeks}: {verdi}</li>
          )}
      </ul>
      <p>a: {første} + {andre} + {tredje}</p>
    </div>
  )
}

export default ViseVariabler;