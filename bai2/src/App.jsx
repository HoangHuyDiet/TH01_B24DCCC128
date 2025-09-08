import React, { useState } from "react";
import TodoItem from "./todoitem";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
     <p>Mô tả công việc: </p>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {list.map((t, index) => (
          <TodoItem key={index} text={t} />
        ))}
      </ul>
    </div>
  );
}

export default App;
