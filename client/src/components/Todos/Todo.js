
import React, {Component} from 'react'
import AddTodo from './AddTodoForm'
import TodoList from './TodoList'
import {connect} from 'react-redux'

import './Todo.css'

class Todos extends Component {

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

		return (
			<div>
				<div className='todo' onClick={this.activeHandler}>
				<h4>Todo</h4>
				</div>
				{this.state.active && (
					<div id='todo-content'>
				<h4>TodoList</h4>
					<TodoList/>
					<AddTodo />

				</div>
				)}
					</div>

		)
	}
}
export default connect()(Todos)