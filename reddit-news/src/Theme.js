import { createTheme } from "@mui/material";

/**
 * @file Theme.js
 * @author Devin Arena
 * @description Stores theme information for the app.
 * @since 10/7/2022
 **/

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ddd",
    },
    primary: {
      main: "#900",
    },
    secondary: {
      main: "#FF4500",
    },
    border: "3px solid rgba(0, 0, 0, 0.1)",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#900",
    },
    secondary: {
      main: "#FF4500",
    },
    border: "3px solid rgba(255, 255, 255, 0.1)",
  },
});

export { lightTheme, darkTheme };
