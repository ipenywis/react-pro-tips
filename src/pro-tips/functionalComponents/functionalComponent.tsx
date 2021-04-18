import React, { useState } from "react";

export function MyFunctionComponent() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter((prevCounter) => prevCounter + 1);

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={increaseCounter}>Counter++</button>
    </div>
  );
}
