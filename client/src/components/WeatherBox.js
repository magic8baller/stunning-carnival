import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Forecast.css'
// import Forecast from './Forecast'
import WeatherDetails from './WeatherDetails'
class WeatherBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let hour = new Date().getHours();
    let date = new Date();

    let formatDay = string => {
      let dateString = new Date(string * 1000).toString();
      return dateString.slice(0, 3);
    };

    return (<section>
      <WeatherDetails currentWeather={this.props.currentWeather} />
			{/* <section className="weather-row weather-forecast weather-forecast-daily active"> */}
				{/* {this.props.forecast.list.map((day, index) => ( */}

			{/* <Forecast key={index} day={day} /> */}
			{/* ))} */}
			{/* </section> */}

		</section>);
  }

}

const mapStateToProps = (state) => ({currentWeather: state.weather.currentWeather, forecast: state.weather.forecast})

export default connect(mapStateToProps)(WeatherBox)
