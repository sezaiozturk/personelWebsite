import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
  {
    "@global": {
      html: {
        fontSize: "62.5%",
        userSelect: "none",
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
