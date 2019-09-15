import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: todosData
    };
  }

  prevPlayerId = 5;

  handleCheckbox = id => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    });
  };
  

  

  handleRemove = id => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter(p => p.id !== id)
      };
    });
  };

  handleAddTodos = todo => {
    this.prevPlayerId += 1;
    this.setState(prevState => {
      return {
        todoList: [
          ...prevState.todoList,
          {
            text: todo,
            completed: false,
            id: this.prevPlayerId
          }
        ]
      };

      // return {
      //   todoList: prevState.todoList.concat({        // Alternative method
      //     id: this.prevPlayerId + 1,
      //     text: todo,
      //     completed: false
      //   })
      // };
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

  // handleChange = id => {                 // This method is also not correct as it is mutating the state
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
            handleCheckbox={() => this.handleCheckbox(item.id)}
            handleRemove={() => this.handleRemove(item.id)}
          />
        ))}
        <Form handleAddTodos={this.handleAddTodos} />
      </div>
    );
  }
}

export default App;
