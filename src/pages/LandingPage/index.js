import { Container } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { SEO } from "../../Components/SEO/SEO";
import { ProgrammerSVG } from "../../Components/SVGs/ProgrammerSVG";
import profileImage from "../../images/profile-pic-edited.png";
import "./landingPage.css";
import { MainHeroSection } from "./MainHeroSection";

const pageTitle = "Welcome";
const description =
  "I’m a software engineer living in Saint Louis, MO. I am passionate about learning and my goal is to share what I’ve learned in order to grow and to help others improve. Welcome to my personal website, where I keep my personal projects as well as a record of the things I’m learning.";

export const ProfileSVG = ({ theme }) => {
  return (
    <Box
      sx={{
        transform: {
          xs: "translateY(0)",
        },
      }}
    >
      <svg
        viewBox="0 0 2750 3000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M934.166 355.205C1315.68 38.9823 1847.09 -181.433 1905.68 209.633C1964.28 600.699 1407.69 1975.84 1036.09 2031.52C664.484 2087.2 62.5557 1213.33 3.95863 822.267C-54.6384 431.201 552.65 671.427 934.166 355.205Z"
          fill={theme.palette.primary.main}
          style={{ transform: "scale(1.4)" }}
        />
        <image
          alt="text"
          id="image0:74"
          style={{ clipPath: "url(#myClip)", transform: "scale(1.41)" }}
          height="2035"
          width="2035"
          href={profileImage}
        />
        <defs>
          <clipPath id="myClip" clipPath="objectBoundingBox">
            <path
              d="M0 5.205C315.68 8.9823 1847.09 -1081.433 1905.68 109.633C1964.28 600.699 1407.69 1975.84 1036.09 2031.52C664.484 2087.2 62.5557 1213.33 3.95863 822.267C-54.6384 431.201 552.65 671.427 934.166 55.205Z"
              fill="white"
            />
          </clipPath>
          <pattern
            id="pattern0"
            patternContentUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <use href="#image0_3:74" />
          </pattern>
          <image
            id="image0_3:74"
            height="2035"
            width="2035"
            href={profileImage}
          />
        </defs>
      </svg>
    </Box>
  );
};

export const LandingPage = () => {
  const theme = useTheme();
  const location = window.location;
  const hostname =
    location.hostname === "localhost" ? location.host : location.hostname;
  return (
    <div className="page-container">
      <SEO pageTitle={pageTitle} description={description} />

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
          buttonLink={"http://" + hostname + "/blog"}
          buttonVariant="contained"
          headerText="Learning to Code?"
          image={<ProgrammerSVG theme={theme} />}
          paragraphText="I've been there, and I know it can be tough. That's why I have compiled a list of resources, tips, and tricks that I found helpful while learning to code. The best part? They're all free! Check it out below!"
        />
      </Container>
    </div>
  );
};
