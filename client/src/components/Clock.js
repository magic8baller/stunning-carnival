import React, {Component} from 'react'
class Clock extends Component {
	state = {
	time: ''
	}

	formattedTime = (date) => {

		return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
	}
	componentDidMount () {
		this.timerID = setInterval(() => this.tick(), 1000)
	}

	componentWillUnmount () {
		clearInterval(this.timerID)
	}

	tick = () => {
		this.setState({time:this.formattedTime(new Date())})
	}

	render () {
		return (
			<div id="clock" className="widget-container clock"><div className='clock-time'>{this.state.time}</div>
			</div>
		)
	}
}


export default Clock