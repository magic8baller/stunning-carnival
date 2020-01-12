import React, {Component} from 'react'
import EditableText from '../common/EditableText.js'
class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		const {todo} = this.props
    return (
		<div style={{
      color: '#fff',
      listStyleType: 'none'
    }} className='inline' key={this.props.todo._id}>

		<input type='checkbox' name='complete' checked={this.props.todo.completed} onChange={() => this.props.setTodoStatus(this.props.todo._id)} />
		<EditableText onChange={e => {
			e.persist()
			todo.text = e.target.value
			this.props.editTodo(todo._id, todo.text)
		}}>

        {this.props.todo.text}
		</EditableText>

				<button className='right' title='Delete' type="submit" onClick={() => this.props.handleDelete(this.props.todo._id)}>&times;</button>
<br/>			</div>);
  }

}

export default TodoItem