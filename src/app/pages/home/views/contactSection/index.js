import React from "react";
import useStyle from "./stylesheet";
import { useNCoreLocalization, Text, Button, useNCoreTheme } from "ncore-web";

const ContactSection = () => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  const { localize } = useNCoreLocalization();
  return (
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
  );
};

export default ContactSection;
