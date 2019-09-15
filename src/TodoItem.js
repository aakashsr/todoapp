import React from "react";

function TodoItem({ item, handleCheckbox, handleRemove, handleEdit }) {
  const styles = {
    color: "#cdcdcd",
    textDecoration: "line-through",
    fontStyle: "italic"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleCheckbox}
      />
      <p style={item.completed ? styles : null}>{item.text}</p>
      <button className="btn btn-blue" onClick={handleEdit}>
        Edit
      </button>
      <button className="btn btn-blue" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default TodoItem;
