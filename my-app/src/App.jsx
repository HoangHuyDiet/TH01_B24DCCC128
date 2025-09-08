import React, { useState } from "react";
import CounterDisplay from "./Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterDisplay value={count} />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
