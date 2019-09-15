import React from "react";
import TodoText from './TodoText';

function TodoItem({ item, handleCheckbox, handleRemove, handleEdit , isEditing}) {

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleCheckbox}
      />
      <TodoText isEditing={isEditing} item={item} />
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
