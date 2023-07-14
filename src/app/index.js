import { NCoreProvider } from "ncore-web";
import themes from "./themes";
import useStyles from "./stylesheet";
import locales from "./locales";
const App = () => {
  return <div className="App">Sezai Öztürk</div>;
};

const ContextAPI = () => {
  return (
    <NCoreProvider
      config={{
        themes,
        locales,
      }}
    >
      <App />
    </NCoreProvider>
  );
};

export default ContextAPI;
