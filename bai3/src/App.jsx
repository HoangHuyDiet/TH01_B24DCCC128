import React, { useState } from "react";
import ColorBox from "./ColorBox.jsx";

function App() {
  const colors = ["red", "green", "blue", "yellow"];
  const [color, setColor] = useState("none");

  return (
    <div style={{ padding: "20px" }}>
      {colors.map((c) => (
        <button key={c} onClick={() => setColor(c)}
        style={{marginRight: "10px"}}
        >
          {c}
        </button>
      ))}
      <ColorBox color={color} />
    </div>
  );
}

export default App;
