import classNames from 'classnames'
import React, {Component} from 'react'
import AddTodo from './AddTodoForm'
import TodoList from './TodoList'
export default class Todos extends Component {

	state = {
		active: false
	}

	activeHandler = () => {
		if (!this.state.active) {
			this.props.fetchTodos()
		}
		this.setState({active: !this.state.active})
	}
	render () {
		let activeTodoList = classNames({
			'todo-list-container': true,
			active: this.state.active
		})
		return (
			<div className='todo-container'>
				<div className={activeTodoList}>
				<h4>TodoList</h4>
					<TodoList todos={this.props.todos}/>
					<AddTodo />
				</div>
				<div className="todo-click-label">
					<span onClick={this.activeHandler}>ToDo</span>
				</div>
			</div>
		)
	}
}
