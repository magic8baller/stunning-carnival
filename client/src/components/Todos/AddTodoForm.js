
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Field, reduxForm, reset} from 'redux-form'
import {addTodo} from '../../store/actions/todoActions.js'
class TodoForm extends Component {

	onSubmit = formProps => {
		this.props.addTodo(formProps, () => {
			this.props.history.push('/')
		})
		console.log(formProps)
	}
	render () {
		const {handleSubmit} = this.props
		return (
			<div className="add-item-container">
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<fieldset>
						<label htmlFor="todo"></label>
						<Field
							className='add-item-input'
							name='text'
							type='text'
							component='input'
						/>
					</fieldset>
				</form>
			</div>

		)
	}
}

const afterSubmit = (result, dispatch) =>
	dispatch(reset('addTodoForm'));

const mapStateToProps = state => ({errorMessage: state.todo.errorMessage})

export default compose(
	connect(mapStateToProps, {addTodo}),
	reduxForm({
		form: 'addTodoForm',
		onSubmitSuccess: afterSubmit
	}),
)(TodoForm)