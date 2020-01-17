import React from 'react';
import EditableText from '../common/EditableText.js';

const TodoItem = ({todo, setTodoStatus, editTodo, handleDelete}) => (
	<div style={{
		color: '#fff'
	}} className='inline' key={todo._id}>

		<input type='checkbox' name='complete' checked={todo.completed} onChange={() => setTodoStatus(todo._id)} />
		<EditableText onChange={e => {
			e.persist();
			todo.text = e.target.value;
			editTodo(todo._id, todo.text);
		}}>
			{todo.text}
		</EditableText>

		<div className='right' title='Delete' type="submit" onClick={() => handleDelete(todo._id)}>
			&times;
		</div>
		<br />
	</div>
);

export default TodoItem