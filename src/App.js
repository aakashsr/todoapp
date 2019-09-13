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

  handleChange = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
      return { todoList: updatedTodos };
    });
  };

  // handleChange(id) {                    // This method is not correct as it is mutating the state
  //   this.setState(prevState => {
  //     const updatedTodos = prevState.todos.map(item => {
  //       if (id === item.id) {
  //         item.completed = !item.completed;
  //       }
  //       return item;
  //     });
  //     return {
  //       todos: updatedTodos
  //     };
  //   });
  // }

  // handleChange = id => {                 // This method is not correct as it is mutating the state
  //   this.setState(prevState => {
  //     const updatedTodos = prevState.todoList.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //     });
  //     return updatedTodos;             // Now , we've "this.state.updatedTodos" instead of "this.state.todos" in your state. I returned the object {todos: updatedTodos} because my state property is todos.
  //   });
  // };

  render() {
    return (
      <div className="todo-list">
        {this.state.todoList.map(item => (
          <TodoItem
            key={item.id}
            item={item}
            handleChange={() => this.handleChange(item.id)}
          />
        ))}
      </div>
    );
  }
}

export default App;
