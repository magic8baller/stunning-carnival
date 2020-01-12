import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteTodo, setTodoStatus, editTodo} from '../../store/actions/todoActions'
import TodoItem from './TodoItem'
class TodoList extends Component {

	render () {
		return (

			<ul>
				{this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDelete={() => this.props.deleteTodo(todo._id)} setTodoStatus={() => this.props.setTodoStatus(todo._id)} editTodo={() => this.props.editTodo(todo._id, todo.text)} />)}
			</ul>
		)
	}
}

const mapStateToProps = state => ({user: state.auth.user, todos: state.todo.todos})
export default connect(mapStateToProps, {deleteTodo, setTodoStatus, editTodo})(TodoList)