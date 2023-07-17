import useStyle from "./stylesheet";
import { Button, useNCoreLocalization } from "ncore-web";
import { MENU } from "../../constants";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const { localize, switchLocale, activeLocale } = useNCoreLocalization();
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <span>SEZAİ</span>
        <span>ÖZTÜRK</span>
      </div>
    </div>
  );
};

export default Header;

/**<div className={classes.container}>
      {MENU.map((item) => {
        return (
          <Button
            title={localize(item.key)}
            onClick={() => {
              navigate(item.path);
            }}
            variant={
              window.location.pathname === item.path ? "filled" : "outline"
            }
          />
        );
      })}
      <Button
        title="language"
        onClick={() => {
          switchLocale(activeLocale === "tr" ? "en" : "tr");
        }}
      />
    </div> */
