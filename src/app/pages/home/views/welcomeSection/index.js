import useStyle from "./stylesheet";
import { Text, useNCoreLocalization } from "ncore-web";

const WelcomeSection = () => {
  const classes = useStyle();
  const { localize } = useNCoreLocalization();
  return (
    <div className={classes.homeSection}>
      <Text variant="header1" color="white">
        {localize("hello")}
      </Text>
      <div className={classes.innerContainer}>
        <Text variant="header2" color="white">
          {localize("welcome")}
        </Text>
        <Text variant="header2" color="white">
          {localize("job")}
        </Text>
      </div>
      <img src="/assets/icons/chevron.png" className={classes.scrool} />
    </div>
  );
};
export default WelcomeSection;
