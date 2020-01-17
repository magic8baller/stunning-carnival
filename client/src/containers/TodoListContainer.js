import {connect} from 'react-redux'
import {deleteTodo, setTodoStatus, editTodo} from '../store/actions/todoActions'
import TodoList from '../components/Todos/TodoList'

const mapStateToProps = state => ({user: state.auth.user, todos: state.todo.todos})
export default connect(mapStateToProps, {deleteTodo, setTodoStatus, editTodo})(TodoList)