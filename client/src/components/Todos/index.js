import React, { Component } from 'react'
import classNames from 'classnames'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
export default class Todos extends Component {

	state = {
		active: false
	}
	componentDidMount() {
		this.props.fetchTodos()
	}

	activeHandler = () => {
		this.setState({ active: !this.state.active })
	}
	render() {
		let activeTodoList = classNames({
			'todo-list-container': true,
			active: this.state.active
		})
		return (
			<div className='todo-container'>
<div className={activeTodoList}>
	<TodoList todos={this.props.todos}/>
	<AddTodo/>
</div>
<div className="todo-click-label">
	<span onClick={this.activeHandler}>ToDo</span>
</div>
			</div>
		)
	}
}
