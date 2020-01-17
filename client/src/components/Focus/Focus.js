import React, { Component } from 'react'

class Focus extends Component {

	state = {text: ''}

	componentDidMount() {
		this.props.fetchFocus()
	}
	handleChange = e => {
		this.setState({text: e.target.value})
	}
	handleKeyPress = e => {
		if (e.key === 'Enter') {


				this.props.addFocus({text:this.state.text});
				this.setState({text: ''});

		}
	}
	render() {
		const {setFocusStatus, deleteFocus, focus} = this.props
		return (
			<div className="focus-form-container">
{!focus ? (
					<div className='add-main-goal-container'>
						<h3>What is your main focus today?</h3>
						<div className="focus-form">
							<input
								className="focus-form-input"
								type="text"
								name="text"
								onChange={this.handleChange}
								onKeyPress={this.handleKeyPress}
								value={this.state.text}
							/>
						</div>
					</div>
) : (
						<div className="main-goal-container">
							<h4>Today</h4>
							<div className="main-goal-form">
								<span>
									<input
										type="checkbox"
										name="completed"
										checked={focus.completed}
										onChange={() => setFocusStatus(focus._id)}
									/>
								</span>
								<h3>{focus.text}</h3>
								<span>
									<button onClick={() => deleteFocus(focus._id)}>X</button>
								</span>
							</div>
						</div>
)}
			</div>
		)
	}
}
export default Focus