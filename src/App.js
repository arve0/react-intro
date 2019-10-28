import React, { useState } from 'react';
import Count from './Count';

function App() {
    let [n, setN] = useState([42, 33]);

    function inc(index) {
        // alert("inc")
        n[index] += 1;
        setN([...n]);
    }

    return (
        <div>
            {n.map((value, index) =>
                <Count n={value} inc={() => inc(index)} />
            )}
        </div>
    );
}

export default App;
