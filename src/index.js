import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import "./global.css";
import reportWebVitals from "./helpers/reportWebVitals";
import { BrowserRouter, Switch } from "react-router-dom";
import { LandingPage } from "./Views/LandingPage/LandingPage";
import { PageRoute } from "./PageRoute";
import { About } from "./Views/About/About";
import { createTheme, lighten, ThemeProvider } from "@mui/material";
import { LearnToCode } from "./Views/LearnToCode/LearnToCode";
import { App } from "./App";

const bakugoLight = "#f3f2f1";
const eraserHead = "#373638";
const bakugo = "#d7d3d0";
const shinso = "#6365a6";
const dabi = "#20c1fe";
const deku = "#5dbfa2";
const leMillion = "#f8d996";
const shoto = "#b63c59";
const colorHexes = {
  bakugoLight,
  eraserHead,
  bakugo,
  shinso,
  dabi,
  deku,
  leMillion,
  shoto,
};
const selectedColor = localStorage.getItem("themeColor");
let primary = selectedColor ? colorHexes[selectedColor] : deku;

const mhaTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: bakugoLight,
      contrastText: bakugoLight,
      icon: bakugoLight,
    },
    background: {
      main: eraserHead,
      paper: lighten(eraserHead, 0.05),
    },
    primary: {
      main: primary,
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
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
      lineHeight: "1.75em",
    },
    body2: {
      fontSize: "1.5rem",
    },
  },
  inputLabelRoot: {
    color: primary,
    "&.Mui-focused": {
      color: primary,
    },
  },
});

const toggleTheme = (value) => {
  primary = value;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
