import React, {Component} from 'react'
import {formatClockTime} from '../utils/formatTime'
class Clock extends Component {
	state = {
	time: ''
	}


	componentDidMount () {
		this.timerID = setInterval(() => this.tick(), 1000)
	}

	componentWillUnmount () {
		clearInterval(this.timerID)
	}

	tick = () => {
		this.setState({time: formatClockTime(new Date())})
	}

	render () {
		return (
			<div id="clock" className="widget-container clock"><div className='clock-time'>{this.state.time}</div>
			</div>
		)
	}
}


export default Clock