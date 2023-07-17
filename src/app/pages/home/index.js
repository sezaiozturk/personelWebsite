import useStyle from "./stylesheet";
import {
  Button,
  Text,
  localize,
  useNCoreLocalization,
  useNCoreTheme,
} from "ncore-web";
const Home = () => {
  const classes = useStyle();
  const { localize } = useNCoreLocalization();
  const { colors } = useNCoreTheme();
  return (
    <div className={classes.container}>
      <Text variant="header1" color="secondary">
        {localize("hello")}
      </Text>
      <div className={classes.innerContainer}>
        <Text variant="header2" color="secondary">
          {localize("welcome")}
        </Text>
        <Text variant="header2" color="secondary">
          {localize("job")}
        </Text>
      </div>
      <img src="/assets/icons/chevron.png" className={classes.scrool} />
    </div>
  );
};

export default Home;
