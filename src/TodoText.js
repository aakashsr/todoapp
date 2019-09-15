import React from "react";

const TodoText = props => {
  const styles = {
    color: "#cdcdcd",
    textDecoration: "line-through",
    fontStyle: "italic"
  };

  if (props.isEditing) {
    return (
      <input
        onChange={props.handleTodoEdits}
        type="text"
        value={props.item.text}
      />
    );
  }
  return <p style={props.item.completed ? styles : null}>{props.item.text}</p>;
};

export default TodoText;
