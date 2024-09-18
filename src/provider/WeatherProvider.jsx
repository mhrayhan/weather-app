import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({}) => {
  const { weatherData, error, loading } = useWeather();
  return (
    <WeatherContext.provider value={{ weatherData, error, loading }}>
      {/* {children} */}
    </WeatherContext.provider>
  );
};

export default WeatherProvider;
