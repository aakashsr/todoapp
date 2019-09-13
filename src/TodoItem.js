import React from "react";

function TodoItem({ item, handleChange }) {
  const styles = {
    color: "#888",
    textDecoration: "line-through",
    fontStyle: "italic"
  };
  return (
    <div className="todo-item">
      <input type="checkbox" checked={item.completed} onChange={handleChange} />
      <p style={item.completed ? styles : null}>{item.text}</p>
    </div>
  );
}

export default TodoItem;
