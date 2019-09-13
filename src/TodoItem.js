import React from "react";

function TodoItem({ item, handleChange, handleRemove }) {
  const styles = {
    color: "#cdcdcd",
    textDecoration: "line-through",
    fontStyle: "italic"
  };
  return (
    <div className="todo-item">
      <input type="checkbox" checked={item.completed} onChange={handleChange} />
      <p style={item.completed ? styles : null}>{item.text}</p>
      <button onClick={handleRemove} style={{ margin: "10px" }}>
        Remove
      </button>
    </div>
  );
}

export default TodoItem;
