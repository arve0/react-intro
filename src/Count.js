import React from "react"

function Count(props) {
    let n = props.n;

    return (
        <p>hallo {n}
        <button onClick={props.inc}>+</button>
        </p>
    )
}

export default Count;
