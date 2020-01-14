import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Forecast.css'
// import Forecast from './Forecast'
import WeatherDetails from '../components/Weather/WeatherDetails'
class WeatherBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (<section>
      <WeatherDetails currentWeather={this.props.currentWeather} />

		</section>);
  }

}

const mapStateToProps = (state) => ({currentWeather: state.weather.currentWeather, forecast: state.weather.forecast})

export default connect(mapStateToProps)(WeatherBox)
