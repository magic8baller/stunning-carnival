import React, { Component } from 'react'
import Clock from './Clock'
class Greeting extends Component {
	state = {
		user: 'Buddy'
	}

	getHours = () => {
	return new Date().getHours()
	}

	setGreeting = () => {
		let currentHour = this.getHours()
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
			<h2 className="greeting-text">Good {this.setGreeting()}, {this.state.user}</h2>
		</div>
		)
	}
}

export default Greeting;
