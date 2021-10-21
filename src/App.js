import React, { useState } from "react";
import "./index.css";
import "./App.css";
import "./global.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { LandingPage } from "./Views/LandingPage/LandingPage";
import { PageRoute } from "./PageRoute";
import { About } from "./Views/About/About";
import { createTheme, lighten, ThemeProvider } from "@mui/material";
import { LearnToCode } from "./Views/LearnToCode/LearnToCode";

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

export const App = () => {
  const [color, setColor] = useState(primary);

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
        main: color,
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
  });

  const changeTheme = (newColor) => {
    setColor(colorHexes[newColor]);
  };

  return (
    <ThemeProvider theme={mhaTheme}>
      <BrowserRouter>
        <Switch>
          <PageRoute
            path="/"
            exact
            component={LandingPage}
            changeTheme={changeTheme}
          />
          <PageRoute
            path="/about"
            exact
            component={About}
            changeTheme={changeTheme}
          />
          <PageRoute
            path="/blog"
            exact
            component={LearnToCode}
            changeTheme={changeTheme}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};
