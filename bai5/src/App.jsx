import React, { useEffect, useState } from "react";
import ClockDisplay from "./ClockDisplay.jsx";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "250px", fontSize: "40px", color: "gray" }}>
      <ClockDisplay time={time} />
    </div>
  );
}

export default App;
