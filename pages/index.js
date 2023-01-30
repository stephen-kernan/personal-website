// import React, { useState } from "react";
// import { LandingPage } from "./LandingPage";
// import { PageRoute } from "./PageRoute";
// import { About } from "./About";
// import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
// import { Blog } from "./Blog/Blog";
// import { BlogPost } from "./Blog/BlogPost";

// const selectedColor = localStorage.getItem("themeColor");
// let primary = selectedColor ? colorHexes[selectedColor] : playerOne;

// export const App = () => {
//   const isDarkMode =
//     localStorage.getItem("darkMode") === "true" ||
//     !localStorage.getItem("darkMode");
//   let background = isDarkMode ? eraserHead : bakugoLight;
//   // eslint-disable-next-line no-unused-vars
//   const [color, setColor] = useState(primary);
//   const [darkMode, setDarkMode] = useState(isDarkMode);

//   const changeTheme = (newColor) => {
//     localStorage.setItem("themeColor", newColor);
//     setColor(colorHexes[newColor]);
//   };

//   const toggleDarkMode = () => {
//     const newValue = !darkMode;
//     localStorage.setItem("darkMode", newValue);
//     setDarkMode(newValue);
//   };

//   return (
//     <ThemeProvider theme={darkModeAdditions}>
//       <CssBaseline />
//       <BrowserRouter>
//         <Switch>
//           <PageRoute
//             path="/"
//             exact
//             component={LandingPage}
//             changeTheme={changeTheme}
//             toggleDarkMode={toggleDarkMode}
//           />
//           <PageRoute
//             path="/about"
//             exact
//             component={About}
//             changeTheme={changeTheme}
//             toggleDarkMode={toggleDarkMode}
//           />
//           <PageRoute
//             path="/blog"
//             exact
//             component={Blog}
//             changeTheme={changeTheme}
//             toggleDarkMode={toggleDarkMode}
//           />
//           <PageRoute path="/blog/:title" exact component={BlogPost} />
//         </Switch>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// };
import { Container } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import { HeroSection } from "../src/Components/HeroSection/HeroSection";
import { SEO } from "../src/Components/SEO/SEO";
import { ProgrammerSVG } from "../src/Components/SVGs/ProgrammerSVG";
import { ProfileSVG } from "../src/Components/SVGs/ProfileSVG";
import { MainHeroSection } from "./MainHeroSection";
import { GlobalNav } from "../src/Components/GlobalNav/GlobalNav";

const pageTitle = "Welcome";
const description =
  "I’m a software engineer living in Saint Louis, MO. I am passionate about learning and my goal is to share what I’ve learned in order to grow and to help others improve. Welcome to my personal website, where I keep my personal projects as well as a record of the things I’m learning.";

export const LandingPage = () => {
  const theme = useTheme();

  return (
    <div className="page-container">
      <SEO pageTitle={pageTitle} description={description} />

      <GlobalNav />

      <Container maxWidth="lg" className="content-container">
        <MainHeroSection
          huge
          float="right"
          buttonLabel="View My Github"
          buttonLink="https://github.com/stephen-kernan"
          headerText="Hi, I'm Stephen"
          image={<ProfileSVG theme={theme} />}
          paragraphText="I’m a software engineer living in Saint Louis, MO. I am
                passionate about learning and my goal is to share what I’ve
                learned in order to grow and to help others improve. Welcome to
                my personal website, where I keep my personal projects as well
                as a record of the things I’m learning."
        />
        <HeroSection
          float="left"
          buttonLabel="Here's a Guide"
          buttonLink={"/blog/learning-to-code"}
          buttonVariant="contained"
          headerText="Learning to Code?"
          image={<ProgrammerSVG theme={theme} />}
          paragraphText="I've been there, and I know it can be tough. That's why I have compiled a list of resources, tips, and tricks that I found helpful while learning to code. The best part? They're all free! Check it out below!"
        />
      </Container>
    </div>
  );
};

export default LandingPage;
