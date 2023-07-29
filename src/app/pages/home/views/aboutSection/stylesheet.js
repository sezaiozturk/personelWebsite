import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    aboutSection: {
      display: "flex",
      height: "100vh",
    },
    aboutContentContainer: {
      padding: "10rem 0 10rem 10rem",
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
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flex: 1.3,
    },
    profilePhoto: {
      width: 500,
      height: 700,
    },

    "@media screen and (max-width:900px)": {
      profilePhoto: {
        width: 300,
        height: 500,
      },
    },
    "@media screen and (max-width:768px)": {
      aboutSection: {
        height: "140vh",
        flexDirection: "column-reverse",
      },
      aboutContentContainer: {
        padding: "10rem",
      },
      profilePhoto: {
        width: 300,
        height: 400,
      },
    },
    "@media screen and (max-width:410px)": {
      aboutSection: {
        height: "140vh",
        flexDirection: "column-reverse",
      },
      aboutContentContainer: {
        padding: "3rem",
      },
      profilePhoto: {
        width: 300,
        height: 400,
      },
    },
  },
  {
    name: "About-Section",
  }
);
export default useStyle;
/*"@media screen and (max-width:1200px)": {
},
"@media screen and (max-width:1100px)": {},*/
