import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyImage from "./assets/backgrounds/rainy-day.jpg";
import ScatteredImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import ThunderstormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import { WeatherContext } from "./context";

const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climeteImage, setClimeteImage] = useState("");

  function getBackgorundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyImage;
      case "Clouds":
        return ScatteredImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderstormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bgImage = getBackgorundImage(weatherData.climate);
    setClimeteImage(bgImage);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <p className="text-3xl p-6 bg-slate-300 w-fit font-bold mt-4 mx-auto ">
          {loading.message}
        </p>
      ) : (
        <div
          style={{ backgroundImage: `url('${climeteImage}')` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header></Header>
          <main>
            <section>
              <WeatherBoard></WeatherBoard>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
