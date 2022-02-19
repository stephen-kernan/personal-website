import React, { useState } from "react";
import "./index.css";
import "./App.css";
import "./global.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { PageRoute } from "./PageRoute";
import { About } from "./pages/About";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { LearnToCode } from "./pages/LearnToCode";

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
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  let background = isDarkMode ? eraserHead : bakugoLight;
  const [color, setColor] = useState(primary);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  const mhaTheme = createTheme({
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
        main: color,
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
      h1: {
        fontSize: "3rem",
        fontWeight: 600,
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

  const changeTheme = (newColor) => {
    localStorage.setItem("themeColor", newColor);
    setColor(colorHexes[newColor]);
  };

  const toggleDarkMode = () => {
    const newValue = !darkMode;
    localStorage.setItem("darkMode", newValue);
    setDarkMode(newValue);
  };

  return (
    <ThemeProvider theme={darkMode ? darkModeAdditions : mhaTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <PageRoute
            path="/"
            exact
            component={LandingPage}
            changeTheme={changeTheme}
            toggleDarkMode={toggleDarkMode}
          />
          <PageRoute
            path="/about"
            exact
            component={About}
            changeTheme={changeTheme}
            toggleDarkMode={toggleDarkMode}
          />
          <PageRoute
            path="/blog"
            exact
            component={LearnToCode}
            changeTheme={changeTheme}
            toggleDarkMode={toggleDarkMode}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};
