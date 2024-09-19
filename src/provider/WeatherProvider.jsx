import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();
  console.log({
    weatherData,
    error,
    loading,
  });
  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
