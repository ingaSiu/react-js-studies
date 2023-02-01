import { useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import { weatherApi } from '../consts/apiMeteo';

const WeatherApp = () => {
  // kai buna object tai paliekam arba tuscia object ar undefined
  const [weatherData, setWeatherData] = useState(undefined);

  useEffect(() => {
    fetch(weatherApi)
      .then((response) => response.json())
      .then((response) => {
        setWeatherData(response);
      })
      .catch((error) => console.error(error));
  }, []);
  //useEffect viduj iskvieciant yra anonimine funkcija, ir tuscias array (dependency array)
  // kai dependency array kas nors pasikeicia, pasitrigerina useEffect function

  /*return ({weathersData && weathersData.map((weatherData) => {
    return <WeatherCard name={weatherData.name} dob={weatherData.dob}> <SpecialButton color="black" title="click me" /></WeatherCard>;
  })});*/

  return <div>{weatherData && <WeatherCard weatherData={weatherData} />}</div>;
  // rasom if, kad jei weatherData ir true, tai tada atvaizduok po && card
};

export default WeatherApp;

