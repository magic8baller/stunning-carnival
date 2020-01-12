import classNames from 'classnames'
import React, {Component} from 'react'
import AddTodo from './AddTodoForm'
import TodoList from './TodoList'
import {connect} from 'react-redux'
import {addTodo} from '../../store/actions/todoActions.js'


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
		let activeTodoList = classNames({
			'todo-list-container': true,
			active: this.state.active
		})
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