import React from "react";

const PendingTodo = ({name}) => {
  if (name) {
    return (
      <div className="todo-item fade">
        <span>{name}</span>
      </div>
    );
  }
  return null;
};

export default PendingTodo;
