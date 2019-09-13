import React from "react";

function TodoItem({ item , handleChange}) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleChange}
      />
      <p>{item.text}</p>
    </div>
  );
}

export default TodoItem;
