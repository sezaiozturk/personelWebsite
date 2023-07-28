import { createUseStyles } from "react-jss";
const useStyle = createUseStyles(
  {
    contactSection: {
      display: "flex",
      width: "100%",
      height: "50vh",
    },
    contactInfo: {
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "left",
      display: "flex",
      alignItems: "center",
      gap: "3rem",
      flex: 0.35,
      "& div:nth-child(2)": {
        flexDirection: "column",
        display: "flex",
        gap: "1rem",
        "& span": {
          fontSize: "1.8rem",
          color: ({ color }) => color.gray,
        },
      },
      "& div:nth-child(3)": {
        display: "flex",
        gap: "1rem",
      },
    },
    contactForm: {
      display: "flex",
      flex: 0.65,
      backgroundColor: ({ color }) => color.primary,
    },
  },
  {
    name: "Contact-Section",
  }
);

export default useStyle;
