import React, {Component} from 'react'
import {connect} from 'react-redux'
import Greeting from './GreetingContainer'
import Links from './LinksContainer'
import Search from '../components/Search'
import {getGeolocation} from '../store/actions/weatherActions'
import {getBackground,setBackground, getBackgroundHistory} from '../store/actions/backgroundActions'
import QuoteContainer from './QuoteContainer'
import SettingsContainer from './SettingsContainer'
import TodoContainer from './TodoContainer.js'
import WeatherContainer from './WeatherContainer.js'
import FocusContainer from './FocusContainer.js'
import BackgroundContainer from './WallpaperContainer.js'
class Dashboard extends Component {

	componentDidMount () {
		this.props.getGeolocation()
		// this.props.getBackground()
		this.props.getBackgroundHistory()
		// this.props.getBackgroundHistory()
		// this.props.getBackground()

// this.handleBackgroundChange()
	}
	componentDidUpdate (prevProps, prevState) {
		if (this.props.background.currentBackground!== prevProps.background.currentBackground) {

			this.handleBackgroundChange()
		}
	}

	handleBackgroundChange = () => {

			this.props.setBackground({
				backgroundImage: `url("${this.props.background.currentBackground.urls.full}")`,
				backgroundPosition: 'relative',
				backgroundRepeat: 'no-repeat center center fixed',
				backgroundSize: 'cover'
			})

	}
	render () {


		return (
			<div className='App' style={this.props.background.bgStyle}>
				<BackgroundContainer  />
				<Links />
				<Search />
				<WeatherContainer />
				<Greeting />
				<FocusContainer />
				<SettingsContainer handleBackgroundChange={this.handleBackgroundChange} />
				<TodoContainer />
				<QuoteContainer />
			</div>
		)
	}
}
const mapStateToProps = state => ({position: state.position.coords, background: state.background})
export default connect(mapStateToProps, {getGeolocation, getBackground, getBackgroundHistory, setBackground})(Dashboard)