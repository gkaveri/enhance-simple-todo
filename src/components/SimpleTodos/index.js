import {Component} from 'react'
import './index.css'

import TodoItem from '../TodoItem'

class SimpleTodos extends Component {
  state = {
    todosList: [
      {
        id: 1,
        title: 'Book the ticket for today evening',
        completed: false,
      },
      {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
        completed: false,
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
        completed: false,
      },
      {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
        completed: false,
      },
      {
        id: 5,
        title: 'Order fruits on Big Basket',
        completed: false,
      },
      {
        id: 6,
        title: 'Fix the production issue',
        completed: false,
      },
      {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
        completed: false,
      },
      {
        id: 8,
        title: 'Get essentials for Sunday car wash',
        completed: false,
      },
    ],
    newTodoTitle: '',
    newTodoCount: 1,
  }

  handleAddTodo = () => {
    const {newTodoTitle, newTodoCount} = this.state
    const newTodos = Array.from({length: newTodoCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTodoTitle,
      completed: false,
    }))
    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      newTodoTitle: '',
      newTodoCount: 1,
    }))
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updateTodoList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({todosList: updateTodoList})
  }

  toggleComplete = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todosList: updatedTodoList})
  }

  render() {
    const {todosList, newTodoTitle, newTodoCount} = this.state
    return (
      <div className="container">
        <div className="container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo">
            <input
              type="text"
              name="newTodoTitle"
              value={newTodoTitle}
              onChange={this.handleChange}
              placeholder="Enter todo title"
            />
            <input
              type="number"
              name="newTodoCount"
              value={newTodoCount}
              onChange={this.handleChange}
              placeholder="Enter number of todos"
            />
            <button onClick={this.handleAddTodo} type="button">
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
