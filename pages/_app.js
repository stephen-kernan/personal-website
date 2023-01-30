// pages/_app.js
import React, { useEffect } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "prismjs/prism";
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";

import "./index.css";
import "./App.css";
import "./global.css";
import "./prism.css";

import styles from "./landingPage.module.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const bakugoLight = "#f3f2f1";
const eraserHead = "#373638";
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
    fontFamily: "'Epilogue', 'Sora', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 900,
    },
    huge: {
      fontSize: "clamp(3.5rem, 14vw, 9rem)",
      lineHeight: "clamp(4.5rem, 18vw, 12rem)",
      fontWeight: 900,
    },
    semiHuge: {
      fontSize: "clamp(2rem, 10vw, 6rem)",
      lineHeight: "clamp(2.5rem, 12vw, 7rem)",
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
      fontSize: "2rem",
      fontWeight: 900,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "'Epilogue', 'Sora', sans-serif",
      fontSize: "clamp(1rem, 4vw, 1.25rem)",
      lineHeight: "1.75em",
    },
    body2: {
      fontFamily: "'Sora', 'Epilogue', sans-serif",
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
  useEffect(() => {
    Prism.highlightAll();
  });
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
