import React, {Component} from 'react'
import {connect} from 'react-redux'
import Greeting from './GreetingContainer'
import Links from './LinksContainer'
import Search from '../components/Search'
import {getGeolocation} from '../store/actions/weatherActions'
import {setBackground, getBackgroundHistory} from '../store/actions/backgroundActions'
import QuoteContainer from './QuoteContainer'
import SettingsContainer from './SettingsContainer'
import TodoContainer from './TodoContainer.js'
import WeatherContainer from './WeatherContainer.js'
import FocusContainer from './FocusContainer.js'
import BackgroundContainer from './BackgroundContainer.js'
class Dashboard extends Component {
	componentDidMount () {
		this.props.getGeolocation()

		this.props.getBackgroundHistory()
this.handleBackgroundChange()
	}
	handleBackgroundChange = () => {
		const img = new Image()
		img.src = this.props.background.currentBackground
		img.onload = () => {
			this.props.setBackground({
				backgroundImage: `url(${img.src}) no-repeat center center fixed`,
				backgroundPosition: 'relative',
				backgroundRepeat: 'no-repeat center center fixed',
				backgroundSize: 'cover'
			})
		}
	}
	render () {

		return (
			<div className='App' style={this.props.background.bgStyle}>
			{/* <BackgroundContainer bg={this.props.background} /> */}
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
const mapStateToProps = state => ({position: state.position.coords, background: state.background})
export default connect(mapStateToProps, {getGeolocation, getBackgroundHistory, setBackground})(Dashboard)