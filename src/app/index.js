import { NCoreProvider, Text } from "ncore-web";
import themes from "./themes";
import useStyles from "./stylesheet";
import locales from "./locales";
import Navigation from "./navigation";
const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Navigation />
    </div>
  );
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
