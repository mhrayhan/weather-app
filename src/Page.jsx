import Header from "./components/header/header";
import WeatherBoard from "./components/weather/WeatherBoard";

const Page = () => {
  return (
    <div className="grid place-items-center h-screen">
      <Header></Header>
      <main>
        <section>
          <WeatherBoard></WeatherBoard>
        </section>
      </main>
    </div>
  );
};

export default Page;
