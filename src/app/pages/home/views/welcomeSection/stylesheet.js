import { createUseStyles } from "react-jss";
import { clickEvents } from "../../../../themes/helpers";

const useStyle = createUseStyles(
  {
    "@global": {
      "@keyframes scroolAnim": {
        "0%": {
          transform: "translateY(10px)",
        },
        "20%": {
          transform: "translateY(5px)",
        },
        "40%": {
          transform: "translateY(10px)",
        },
        "60%": {
          transform: "translateY(5px)",
        },
        "80%": {
          transform: "translateY(10px)",
        },
        "100%": {
          transform: "translateY(0px)",
        },
      },
    },
    homeSection: {
      backgroundImage: 'url("/assets/images/background.jpg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      display: "flex",
      height: "100vh",
      width: "100%",
      gap: "6rem",
    },
    innerContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      display: "flex",
      gap: "1.2rem",
    },
    scrool: {
      ...clickEvents(),
      height: 30,
      width: 30,
      animation: "scroolAnim 1.5s ease infinite",
    },
    "@media screen and (max-width:492px)": {},
  },
  {
    name: "Welcome-Section",
  }
);

export default useStyle;
