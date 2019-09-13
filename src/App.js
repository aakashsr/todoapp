import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todosData
    };
  }

  render() {
    return (
      <div className="todo-list">
        {this.state.todoList.map(item => (
          <TodoItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default App;
