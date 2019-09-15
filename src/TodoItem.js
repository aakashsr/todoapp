import React from "react";
import TodoText from "./TodoText";

function TodoItem({
  item,
  handleCheckbox,
  handleRemove,
  handleEdit,
  isEditing,
  setTodo
}) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleCheckbox}
      />
      <TodoText
        handleTodoEdits={e => setTodo(e.target.value)}
        isEditing={isEditing}
        item={item}
      >
        {item.text}
      </TodoText>
      <button className="btn btn-blue" onClick={handleEdit}>
        {isEditing?"Save":"Edit"}
      </button>
      <button className="btn btn-blue" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default TodoItem;
