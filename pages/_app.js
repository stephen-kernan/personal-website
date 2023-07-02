// pages/_app.js
import React, { useEffect } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "./index.css";
import "./App.css";
import "./global.css";
import "./prism.css";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const bakugoLight = "#e3e2e1";
const eraserHead = "#282728";
const background = eraserHead;

const newColor = "#9EBCEA";
const playerOne = "#9EBCEA";
const playerTwo = "#EA9E9E";
const playerThree = "#F8D996";
const playerFour = "#8DDBE0";

const colorHexes = {
  bakugoLight,
  eraserHead,
  newColor,
  playerOne,
  playerTwo,
  playerThree,
  playerFour,
};

const mhaTheme = createTheme({
  ...colorHexes,
  palette: {
    mode: "light",
    ...colorHexes,
    text: {
      primary: eraserHead,
      contrastText: eraserHead,
      icon: eraserHead,
    },
    background: {
      default: background,
      paper: background,
    },
    primary: {
      main: newColor,
    },
  },
  typography: {
    fontFamily: "var(--bodyFont)",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 900,
    },
    huge: {
      fontSize: "clamp(4rem, 10vw, 6rem)",
      lineHeight: "clamp(4.5rem, 18vw, 10rem)",
      fontWeight: 900,
    },
    semiHuge: {
      fontSize: "clamp(2.5rem, 10vw, 4.5rem)",
      lineHeight: "clamp(2.5rem, 12vw, 5.5rem)",
      fontWeight: 900,
    },
    subHeader: {
      fontSize: "clamp(1rem, 5vw, 2.5rem)",
      lineHeight: "clamp(2rem, 7.5vw, 3.5rem)",
      fontWeight: 700,
      // fontStyle: "italic",
      marginTop: "0 !important",
    },
    h2: {
      fontSize: "clamp(1.25rem, 10vw, 1.5rem)",
      lineHeight: "clamp(1.75rem, 10vw, 2.25rem)",
      fontWeight: 900,
      color: "var(--playerOne)"
    },
    h3: {
      fontSize: "clamp(1.125rem, 1.75rem, 2px)",
      fontWeight: 700,
    },
    h4: {
      fontSize: "clamp(1.125rem, 1.75rem, 2px)",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "var(--bodyFont)",
      fontSize: "clamp(1rem, 3vw, 1.1rem)",
      lineHeight: "1.75em",
    },
    body2: {
      fontFamily: "var(--titleFont)",
      fontSize: "1.25rem",
    },
  },
});

const darkModeAdditions = createTheme({
  ...mhaTheme,
  palette: {
    ...mhaTheme.palette,
    mode: "dark",
    text: {
      primary: bakugoLight,
      contrastText: bakugoLight,
      icon: bakugoLight,
    },
  },
});

export const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={darkModeAdditions}>
        <CssBaseline />
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
