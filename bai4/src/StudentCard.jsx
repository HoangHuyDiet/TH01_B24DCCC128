import React, { useState } from "react";

function StudentCard({ name, age, className }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <button onClick={() => setShow(!show)}>
        {show ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {show && (
        <p>
          Tuổi: {age} <br />
          Lớp: {className}
        </p>
      )}
    </div>
  );
}

export default StudentCard;
