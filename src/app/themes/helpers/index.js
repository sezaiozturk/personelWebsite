export const clickEvents = () => {
  return {
    "&:hover": {
      cursor: "pointer",
      opacity: "0.75",
    },
    "&:active": {
      transform: "translateY(2px)",
      transition: "transform 0.1s",
    },
  };
};
