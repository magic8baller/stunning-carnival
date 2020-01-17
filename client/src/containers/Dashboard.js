import React, {Component} from 'react'
import {connect} from 'react-redux'
import Greeting from './GreetingContainer'
import Links from './LinksContainer'
import Search from '../components/Search'
import {getGeolocation} from '../store/actions/weatherActions'
import QuoteContainer from './QuoteContainer'
import SettingsContainer from './SettingsContainer'
import TodoContainer from './TodoContainer.js'
import WeatherContainer from './WeatherContainer.js'
import FocusContainer from './FocusContainer.js'
class Dashboard extends Component {
	componentDidMount () {
		this.props.getGeolocation()
	}
	render () {
		return (
			<div className='App'>
				<Links />
				<Search />
				<WeatherContainer />
				<Greeting />
				<FocusContainer />
				<SettingsContainer />
				<TodoContainer />
				<QuoteContainer />
			</div>
		)
	}
}
const mapStateToProps = state => ({position: state.position.coords})
export default connect(mapStateToProps, {getGeolocation})(Dashboard)