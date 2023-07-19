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
    <div style={classes.container}>
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
      <div className={classes.aboutSection}>
        <div className={classes.aboutContentContainer}>
          <div className={classes.aboutInfoContainer}>
            <Text variant="header3" color="secondary">
              {localize("aboutMe")}
            </Text>
            <div>
              <Text variant="header4" color="gray">
                {localize("aboutMeTitle")}
              </Text>
              <Text variant="header4" color="gray100">
                {localize("aboutMeSubTitle")}
              </Text>
              <Button title={localize("cv")} color="secondary" />
            </div>
          </div>
        </div>
        <div className={classes.aboutImageContainer}></div>
      </div>
    </div>
  );
};

export default Home;
