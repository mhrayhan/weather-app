import "./App.css";
import { WeatherProvider } from "./provider";

function App() {
  return (
    <WeatherProvider>
      {/* <div className="grid place-items-center h-screen">
        <Header></Header>
        <main>
          <section>
            <WeatherBoard></WeatherBoard>
          </section>
        </main>
      </div> */}
    </WeatherProvider>
  );
}

export default App;
