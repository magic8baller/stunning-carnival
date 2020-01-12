import React, { Component } from 'react'
import {getGeolocation} from '../store/actions/weatherActions'
import {connect} from 'react-redux'
import WeatherContainer from './WeatherContainer.js'
import TodoContainer from './TodoContainer.js'
import Greeting from '../components/Greeting'
import Search from '../components/Search'
import Links from '../components/Links/Links'
import QuoteContainer from './QuoteContainer'
class Dashboard extends Component {
	componentDidMount() {
		this.props.getGeolocation()
	}
	render() {
		return (
			<div className='App'>
			<Links/>
			<Search/>
<WeatherContainer/>
<Greeting/>
<TodoContainer/>
<QuoteContainer/>
			</div>
		)
	}
}
const mapStateToProps = state => ({position: state.position.coords})
export default connect(mapStateToProps, {getGeolocation})(Dashboard)