import React from 'react'
import TodoItem from './TodoItem'

const TodoList = props => (
	<ul className='todo-list'>
		{props.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDelete={() => props.deleteTodo(todo._id)} setTodoStatus={() => props.setTodoStatus(todo._id)} editTodo={() => props.editTodo(todo._id, todo.text)} />)}
	</ul>
)

export default TodoList