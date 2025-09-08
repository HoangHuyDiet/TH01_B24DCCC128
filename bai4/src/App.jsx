import React from "react";
import StudentCard from "./StudentCard.jsx";

function App() {
  const students = [
    { name: "Nguyễn Văn A", age: 20, className: "UDU02" },
    { name: "Nguyễn Văn B", age: 21, className: "UDU01" },
    { name: "Trần Văn C", age: 22, className: "UDU03" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {students.map((s, index) => (
        <StudentCard key={index} {...s} />
      ))}
    </div>
  );
}

export default App;
