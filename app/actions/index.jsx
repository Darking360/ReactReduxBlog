import Axios from 'axios'

const API_KEY = "8e12de913f0fd73b65fe066c9c4aad73";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const URL = `${ROOT_URL}&q=${city},us`
  const request = Axios.get(URL);

  console.log("Request is");
  console.log(request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
