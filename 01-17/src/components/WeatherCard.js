import './WeatherCard.css';
import { FaSnowflake, FaSun, FaCloudRain } from 'react-icons/fa';
// jei yra tu paciu pernaudojimu, tai galima i const issikelti
import { lightBlue, lightYellow } from '../consts/colors';

const iconSize = 112;

const WeatherCard = ({ weatherData }) => {
  console.log(weatherData);

  const getWeatherIcon = (weathercode) => {
    switch (weathercode) {
      case 61:
        return { icon: <FaCloudRain color="#DBF1FD" size={iconSize} />, backgroundColor: lightBlue };
      case 71:
        return { icon: <FaSnowflake color="#DBF1FD" size={iconSize} />, backgroundColor: lightBlue };

      default:
        return { icon: <FaSun color="#FDB813" size={iconSize} />, backgroundColor: lightYellow };
    }
  };
  const { icon, backgroundColor } = getWeatherIcon(weatherData.daily.weathercode[0]);
  return (
    <div className="weather-card" style={{ backgroundColor }}>
      <div className="weather-info">
        <p className="weather-timezone">{weatherData.timezone}</p>
        <p className="weather-date">{new Date().toDateString()}</p>
        <p className="weather-temperature">
          {weatherData.daily.temperature_2m_min[0]} {weatherData.daily_units.temperature_2m_min} -{' '}
          {weatherData.daily.temperature_2m_max[0]} {''}
          {weatherData.daily_units.temperature_2m_min}
        </p>
        <p className="weather-windspeed">
          {weatherData.daily.windspeed_10m_max[0]} {weatherData.daily_units.windspeed_10m_max}
        </p>
      </div>
      <div className="weather-icon">{icon}</div>
    </div>
  );
};

export default WeatherCard;
