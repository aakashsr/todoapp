import React from "react";

const PendingTodo = ({name}) => {
  if (name) {
    return <li className="pending">{name}</li>;
  }
  return null;
};

export default PendingTodo;
