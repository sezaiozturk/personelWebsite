import React from "react";
import useStyle from "./stylesheet";
import { useNCoreLocalization, useNCoreTheme } from "ncore-web";

const AreaSection = () => {
  const { colors } = useNCoreTheme();
  const classes = useStyle({ color: colors });
  const { localize } = useNCoreLocalization();
  return (
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
  );
};

export default AreaSection;
