import React, { Component } from "react";

export default class Form extends Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          placeholder="Add todos"
          onChange={() => console.log("changed")}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
