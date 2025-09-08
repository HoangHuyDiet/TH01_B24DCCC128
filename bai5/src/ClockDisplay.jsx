import React from "react";

function ClockDisplay({ time }) {
  return <h1>{time.toLocaleTimeString()}</h1>;
}

export default ClockDisplay;
