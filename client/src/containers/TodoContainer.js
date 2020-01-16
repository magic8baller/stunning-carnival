import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, deleteTodo} from '../store/actions/todoActions'
import Todos from '../components/Todos/Todo'
class TodoContainer extends Component {

	render() {
		return (
<Todos fetchTodos={this.props.fetchTodos} todos={this.props.todos} isLoading={this.props.isLoading} deleteTodo={this.props.deleteTodo}/>
		)
	}
}

const mapStateToProps = state => ({todos: state.todo.todos, isLoading: state.todo.isLoading})

export default connect(mapStateToProps, {fetchTodos, deleteTodo})(TodoContainer)
