import React from "react";

const todoText = props => {
  const styles = {
    color: "#cdcdcd",
    textDecoration: "line-through",
    fontStyle: "italic"
  };

  if (props.isEditing) {
    return <input type="text" value={props.item.text} />;
  }
  return <p style={props.item.completed ? styles : null}>{props.item.text}</p>;
};

export default todoText;
