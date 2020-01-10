import React from 'react'

const TodoItem = ({todo, handleDelete}) => {
	return (

			<li className="todo-list-item" key={todo._id}>
			<span><input type='checkbox' name='complete' />
{todo.text}
			</span>
			<button type="submit" onClick={() => handleDelete(todo._id)}>X</button>
			</li>

	)
}
export default TodoItem