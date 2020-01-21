import React, {Component} from 'react'

class AddQuote extends Component {
  state = {
		quote: '',
		author: ''
	}

	handleChange = e => {
		this.setState({[e.target.name]: e.target.value})
	}
	handleSubmit = e => {
		e.preventDefault()
		this.props.addQuote({quote: this.state.quote, author: this.state.author})
		this.setState({quote: '', author: ''})
	}

  render() {
    return (
		<form onSubmit={this.handleSubmit}>
				<label htmlFor='Quote'>Quote:</label>
			<input type='text' name='quote' value={this.state.quote} onChange={this.handleChange} />
			<label htmlFor='Source'>Source</label>
				<input type='text' name='author' value={this.state.author} onChange={this.handleChange} />
				<button type='submit'>Save</button>
		</form>
		);
  }

}
export default AddQuote