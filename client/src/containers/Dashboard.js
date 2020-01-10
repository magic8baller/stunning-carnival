import React, { Component } from 'react'
import {getGeolocation} from '../store/actions/weatherActions'
import {connect} from 'react-redux'
import WeatherContainer from './WeatherContainer.js'
import Greeting from '../components/Greeting'
class Dashboard extends Component {
	componentDidMount() {
		this.props.getGeolocation()
	}
	render() {
		return (
			<div className='App'>
<WeatherContainer/>
<Greeting/>
			</div>
		)
	}
}
const mapStateToProps = state => ({position: state.position.coords})
export default connect(mapStateToProps, {getGeolocation})(Dashboard)