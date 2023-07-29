import React from "react";
import useStyle from "./stylesheet";
import { useNCoreLocalization, Text, Button } from "ncore-web";

const AboutSection = () => {
  const classes = useStyle();
  const { localize } = useNCoreLocalization();
  return (
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
      <div className={classes.aboutImageContainer} id="about">
        <img src="/assets/images/avatar.png" className={classes.profilePhoto} />
      </div>
    </div>
  );
};

export default AboutSection;
