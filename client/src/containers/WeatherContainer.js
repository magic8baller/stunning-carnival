import {connect} from 'react-redux'
import {fetchCurrentWeather} from '../store/actions/weatherActions'

import React, {Component} from 'react'
import Spinner from '../components/common/Spinner'
import CurrentWeather from '../components/CurrentWeather'

class Weather extends Component {

	componentDidMount () {
		this.props.fetchCurrentWeather(this.props.position)
		localStorage.setItem('coords', JSON.stringify(this.props.position))
	}

	componentDidUpdate (prevProps, prevState) {
		if (this.props.position !== prevProps.position) {
			this.props.fetchCurrentWeather(this.props.position)
			// localStorageGeolocation(localStorage.getItem('coords'))
		}
	}

	renderCurrentWeather = () => {
		const {currentWeather} = this.props
		return currentWeather ?
			(<CurrentWeather currentWeather={currentWeather} />) : (<Spinner />)
	}

	render () {
		return (
			<>
				{this.renderCurrentWeather()}
			</>
		)
	}
}



const mapStateToProps = (state) => ({position: state.position.coords, currentWeather: state.weather.currentWeather})

export default connect(mapStateToProps, {fetchCurrentWeather})(Weather)
