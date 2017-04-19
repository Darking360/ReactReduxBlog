import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'
import GoogleMap from '../components/google_map'

class WeatherList extends React.Component {
  renderWeather(cityData){

    const temp = cityData.list.map((data) => data.main.temp);
    const press = cityData.list.map((data) => data.main.pressure);
    const hum = cityData.list.map((data) => data.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={cityData.city.name}>
        <td style={ { "width":200,"height":200 } }>
          <GoogleMap lng={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temp} color="blue"/>
        </td>
        <td>
          <Chart data={press} color="yellow"/>
        </td>
        <td>
          <Chart data={hum} color="green"/>
        </td>
      </tr>
    );
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
};

function mapStateToProps({ weather }){
  return {
    weather: weather
  };
}

export default connect(mapStateToProps)(WeatherList);
