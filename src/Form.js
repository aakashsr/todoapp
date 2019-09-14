import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleValueChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAddTodos(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <form>
        <input
          value={this.state.value}
          type="text"
          placeholder="Add todo "
          onChange={this.handleValueChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
  k;
}
