import { createUseStyles } from "react-jss";
const useStyle = createUseStyles(
  {
    area: {
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: ({ color }) => color.gray100,
      display: "flex",
      width: "100%",
      height: "40%",
    },
    areaBox: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      display: "flex",
      padding: "3rem",
      height: "100%",
      margin: "2rem",
      gap: "1.7rem",
      width: "20%",
      "& span:nth-child(2)": {
        fontSize: "2.3rem",
        color: ({ color }) => color.white,
      },
      "& span:nth-child(3)": {
        fontSize: "1.3rem",
        lineHeight: "2rem",
        color: ({ color }) => color.gray,
      },
    },
  },
  {
    name: "Area-Section",
  }
);

export default useStyle;
