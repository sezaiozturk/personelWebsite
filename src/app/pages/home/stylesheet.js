import { createUseStyles } from "react-jss";
import { clickEvents } from "../../themes/helpers";
const useStyle = createUseStyles(
  {
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
    },
    aboutSection: {
      display: "flex",
      height: "100vh",
      width: "100%",
    },
    aboutContentContainer: {
      padding: "10rem",
      display: "flex",
      flex: 1.7,
    },
    aboutInfoContainer: {
      flexDirection: "column",
      textAlign: "left",
      display: "flex",
      "& div:nth-child(2)": {
        flexDirection: "column",
        marginTop: "2rem",
        display: "flex",
        gap: "4rem",
      },
    },
    aboutImageContainer: {
      backgroundColor: "yellow",
      display: "flex",
      flex: 1.3,
    },
  },
  {
    name: "Home-Page",
  }
);

export default useStyle;
