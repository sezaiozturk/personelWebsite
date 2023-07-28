import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
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
      display: "flex",
      flex: 1.3,
    },
  },
  {
    name: "About-Section",
  }
);
export default useStyle;
