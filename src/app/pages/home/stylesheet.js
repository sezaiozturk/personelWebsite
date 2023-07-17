import { createUseStyles } from "react-jss";
import { clickEvents } from "../../themes/helpers";
const useStyle = createUseStyles(
  {
    container: {
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
      width: 30,
      height: 30,
      ...clickEvents(),
    },
  },
  {
    name: "Home-Page",
  }
);

export default useStyle;
