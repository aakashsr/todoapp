import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import Form from "./Form";
import Header from "./Header";
import PendingTodo from "./PendingTodo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isFiltered: false,
      todoList: todosData
    };
  }

  prevPlayerId = 5;

  handleValueChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.handleAddTodos(this.state.value);
    this.setState({
      value: ""
    });
  };

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

  handleEdit = id => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(item => {
          if (item.id === id) {
            return {
              ...item,
              isEditing: !item.isEditing
            };
          }
          return item;
        })
      };
    });
  };

  setNameAt = (text, id) => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(item => {
          if (item.id === id) {
            return {
              ...item,
              text
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

  toggleFilter = () => {
    this.setState(prevState => {
      return {
        isFiltered: !prevState.isFiltered
      };
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
        <Header toggleFilter={this.toggleFilter} />
        {this.state.todoList
          .filter(todo => !this.state.isFiltered || !todo.completed)
          .map(item => (
            <TodoItem
              key={item.id}
              item={item}
              handleCheckbox={() => this.handleCheckbox(item.id)}
              handleRemove={() => this.handleRemove(item.id)}
              handleEdit={() => this.handleEdit(item.id)}
              isEditing={item.isEditing}
              setTodo={text => this.setNameAt(text, item.id)}
            />
          ))}
        <PendingTodo name={this.state.value} />
        <Form
          handleAddTodos={this.handleAddTodos}
          handleValueChange={this.handleValueChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
