import { createUseStyles } from "react-jss";
import { clickEvents } from "../../themes/helpers";

const useStyle = createUseStyles(
  {
    container: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      display: "flex",
      width: "100%",
      gap: 10,
    },
    logoContainer: {
      backdropFilter: "blur(2px)",
      padding: 30,
      zIndex: 5,
      "& span:nth-child(1)": {
        fontSize: 30,
        color: "white",
        borderLeft: "3px solid #72b76a",
        padding: "2px 10px 2px 5px",
      },
      "& span:nth-child(2)": {
        fontSize: 30,
        color: "white",
      },
      ...clickEvents(),
    },
    themeContainer: {
      display: "flex",
    },
    "@media screen and (max-width:455px)": {
      themeContainer: {
        display: "none",
      },
    },
  },
  {
    name: "Header-Component",
  }
);

export default useStyle;
