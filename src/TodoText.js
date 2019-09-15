import React from "react";

const todoText = ({ item }) => {
  const styles = {
    color: "#cdcdcd",
    textDecoration: "line-through",
    fontStyle: "italic"
  };
  return (
    <React.Fragment>
      <p style={item.completed ? styles : null}>{item.text}</p>
    </React.Fragment>
  );
};

export default todoText;
