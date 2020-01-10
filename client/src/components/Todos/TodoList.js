import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../../store/actions/todoActions'
import TodoItem from './TodoItem'
class TodoList extends Component {
	render() {
		return (
			<ul className='todo-list'>
{this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDelete={() => this.props.deleteTodo(todo._id)}/>)}
			</ul>
		)
	}
}

const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps, {deleteTodo})(TodoList)