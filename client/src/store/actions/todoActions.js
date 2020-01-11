import API from '../../API'
import {todoConstants} from '../constants'
const {FETCH_TODOS, TODOS_LOADING, ADD_TODO, DELETE_TODO, EDIT_TODO,
	SET_TODO_STATUS, SET_CURRENT_TODO, CLEAR_CURRENT_TODO, TODO_ERROR} = todoConstants
export const fetchTodos = () => async dispatch => {
	dispatch({type: TODOS_LOADING})

	try {
		const fetchAllResponse = await API.get('/api/todos')
		dispatch({type: FETCH_TODOS, payload: fetchAllResponse.data})
		console.table(fetchAllResponse.data)
	} catch (error) {
		setError(error)
	}
}

export const addTodo = (newTodo, callback) => async (dispatch) => {
	try {
		const createTodoResponse = await API.post('/api/todos', {...newTodo, text: newTodo.text})
		dispatch({type: ADD_TODO, payload: createTodoResponse.data})
	callback()
	} catch (error) {
		console.error(error)
		setError(error)
	}
}

export const editTodo = (updatedTodo, id) => async dispatch => {
	try {
const editTodoResponse = await API.put(`/api/todos/${id}`, updatedTodo)
dispatch({type: EDIT_TODO, payload: editTodoResponse.data})
	} catch (error) {
		setError(error)
	}
}

export const setTodoStatus = id => async (dispatch, getState) => {
	try {
		const currentSelectedTodo = getState().todo.todos.find(todo => todo._id === id)
		const updatedTodo = {...currentSelectedTodo, completed: !currentSelectedTodo.completed}
		await API.put(`/api/todos/${id}`, updatedTodo)
		dispatch({type: SET_TODO_STATUS, payload: id})
	} catch (error) {
		setError(error)
	}
}

export const deleteTodo = id => async dispatch => {
	try {
		await API.delete(`/api/todos/${id}`)
		dispatch({type: DELETE_TODO, payload: id})
	} catch (error) {
		setError(error)
	}
}
export const setCurrentTodo = id => dispatch => {
	dispatch({type: SET_CURRENT_TODO, payload: id})
}

export const setError = error => dispatch => {
	dispatch({type: TODO_ERROR, payload: error.message})
}
export const clearCurrentTodo = () => dispatch => {
	dispatch({type: CLEAR_CURRENT_TODO})
}