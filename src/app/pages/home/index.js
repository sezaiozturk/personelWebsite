import useStyle from "./stylesheet";
import {
  Button,
  Text,
  localize,
  useNCoreLocalization,
  useNCoreTheme,
} from "ncore-web";
const Home = () => {
  const { localize } = useNCoreLocalization();
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
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
              <Button
                title={localize("cv")}
                color="secondary"
                icon={() => (
                  <img src="/assets/icons/download.png" style={{ width: 20 }} />
                )}
              />
            </div>
          </div>
        </div>
        <div className={classes.aboutImageContainer} id="about"></div>
      </div>
      <div className={classes.area} style={{ backgroundColor: colors.gray100 }}>
        <div className={classes.areaBox}>
          <img src="/assets/images/laptop.png" style={{ width: 160 }} />
          <span>{localize("web")}</span>
          <span>{localize("webDescription")}</span>
        </div>
        <div className={classes.areaBox}>
          <img src="/assets/images/telephone.png" style={{ width: 75 }} />
          <span>{localize("app")}</span>
          <span>{localize("appDescription")}</span>
        </div>
      </div>
      <div className={classes.contactSection}>
        <div
          className={classes.contactInfo}
          style={{ backgroundColor: colors.gray100 }}
        >
          <div>
            <Text variant="header3" color={colors.white}>
              {localize("contact")}
            </Text>
          </div>
          <div>
            <span>Sezai ÖZTÜRK</span>
            <span>536 850 54 90</span>
            <span>İstanbul \ Kartal</span>
            <span>ozturksezai52@gmail.com</span>
          </div>
          <div>
            <Button
              size="small"
              variant="ghost"
              icon={() => (
                <img src="/assets/icons/instagram.png" style={{ width: 20 }} />
              )}
            />
            <Button
              size="small"
              variant="ghost"
              icon={() => (
                <img src="/assets/icons/linkedin.png" style={{ width: 20 }} />
              )}
            />
            <Button
              size="small"
              variant="ghost"
              icon={() => (
                <img src="/assets/icons/github.png" style={{ width: 20 }} />
              )}
            />
          </div>
        </div>
        <div className={classes.contactForm}></div>
      </div>
    </div>
  );
};

export default Home;
