import React from 'react'
import ContentEditable from 'react-contenteditable'
const TodoItem = ({todo, handleDelete, setTodoStatus, handleChange}) => (

			<li className="todo-list-item" key={todo._id}>
			<span><input type='checkbox' checked={todo.completed} name='complete' onChange={() => setTodoStatus(todo._id)} />
<ContentEditable html={todo.text} disabled={false} onChange={(e) =>handleChange(e.target.value, todo._id)}/>
			</span>
			<button type="submit" onClick={() => handleDelete(todo._id)}>X</button>
			</li>

	)

export default TodoItem