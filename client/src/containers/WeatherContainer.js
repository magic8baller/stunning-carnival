import React, {Component} from 'react'
import {connect} from 'react-redux'
import Spinner from '../components/common/Spinner'
import CurrentWeather from '../components/CurrentWeather'
import WeatherBox from '../components/WeatherBox'
import {fetchCurrentWeather, fetchForecast} from '../store/actions/weatherActions'

class Weather extends Component {

	state = {
		isOpen: false
	}
	componentDidMount () {
		this.props.fetchCurrentWeather(this.props.position)
		this.props.fetchForecast(this.props.position)
		localStorage.setItem('coords', JSON.stringify(this.props.position))
	}

	componentDidUpdate (prevProps, prevState) {
		if (this.props.position !== prevProps.position) {
			this.props.fetchCurrentWeather(this.props.position)
			this.props.fetchForecast(this.props.position)
		}
	}

	openForecast = () => {
		this.setState({isOpen: !this.state.isOpen})
	}

	render () {
		const {currentWeather} = this.props
		return (
			<>
				{currentWeather ?
					(
						<div onClick={this.openForecast}>
							<CurrentWeather currentWeather={currentWeather} />
						</div>

					) : (<Spinner />)}
				{this.state.isOpen && (
					<div id='weather-cont'>
						<WeatherBox/>
					</div>
				
				)}
			</>
		)
	}
}



const mapStateToProps = (state) => ({position: state.position.coords, currentWeather: state.weather.currentWeather, forecast: state.weather.forecast})

export default connect(mapStateToProps, {fetchCurrentWeather, fetchForecast})(Weather)
