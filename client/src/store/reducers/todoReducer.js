import {todoConstants} from '../constants'
const {FETCH_TODOS, TODOS_LOADING, ADD_TODO, DELETE_TODO, EDIT_TODO,
	SET_TODO_STATUS, SET_CURRENT_TODO, CLEAR_CURRENT_TODO, TODO_ERROR} = todoConstants

const initialState = {
	isLoading: false,
	todos: [],
	currentTodo: null,
	clickedTodo: null,
	errorMessage: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TODOS:
			return {
				...state,
				todos: [...action.payload],
				isLoading: false
			}
		case TODOS_LOADING:
			return {
				...state,
				isLoading: true
			}
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
				isLoading: false
			}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo._id !== action.payload),
				isLoading: false
			}


		case EDIT_TODO:
			const editedTodos = state.todos.map(todo => todo._id === action.payload._id ? {...todo, ...action.payload} : todo)
			return {
				...state,
				todos: editedTodos,
				isLoading: false
			}
		case SET_TODO_STATUS:
			const updatedTodos = state.todos.map(todo => todo._id === action.payload ? {...todo, completed: !todo.completed} : todo)
			return {
				...state,
				todos: updatedTodos,
				isLoading: false
			}
		case TODO_ERROR:
			return {
				...state,
				errorMessage: action.payload
			}
		default:
			return state
	}
}