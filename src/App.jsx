import "./App.css";
import Page from "./Page";
import { FavouriteProvider, WeatherProvider } from "./provider";

function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <Page></Page>
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
