import React, { Component } from 'react'
import Clock from './Clock'
import {connect} from 'react-redux'
class Greeting extends Component {


	getHours = () => {
	return new Date().getHours()
	}

	setGreeting = () => {
		let now = new Date()
		let currentHour = now.getHours()
		if (currentHour < 12) {
			return 'Morning'
		} else if (currentHour > 18) {
			return 'Evening'
		} else {
			return 'Afternoon'
		}
	}
	render() {
		return (
		<div className="greeting-container">
			<Clock/>
			<h2 className="greeting-text">Good {this.setGreeting()}, {this.props.user.name}</h2>
		</div>
		)
	}
}
const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps)(Greeting)
