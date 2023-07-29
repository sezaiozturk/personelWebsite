import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    "@global": {
      "*": {
        boxSizing: "border-box",
      },
      html: {
        fontSize: "62.5%",
        userSelect: "none",
        "@media screen and (max-width: 900px)": {
          fontSize: "50%",
        },
      },
      "@font-face": [
        {
          fontFamily: "italic",
          src: "url(/assets/fonts/OpenSans-Italic.ttf)",
        },
        {
          fontFamily: "variable",
          src: "url(/assets/fonts/OpenSans-Variable.ttf)",
        },
      ],
    },
  },
  {
    name: "Global",
  }
);

export default useStyle;
