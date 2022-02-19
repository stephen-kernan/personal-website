import { Container, Grid } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import { HeroSection } from "../../Components/HeroSection/HeroSection";
import { ProgrammerSVG } from "../../Components/SVGs/ProgrammerSVG";
import profileImage from "../../images/profile-pic-edited.png";
import "./landingPage.css";

export const ProfileSVG = ({ theme }) => {
  return (
    <svg
      style={{ width: "100%", aspectRatio: 1.1 }}
      viewBox="0 0 472 514"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M219.047 140.338C298.037 74.8665 408.06 29.2314 420.192 110.198C432.324 191.165 317.086 475.876 240.149 487.404C163.211 498.933 38.5864 318.006 26.4544 237.039C14.3224 156.072 140.057 205.809 219.047 140.338Z"
        fill={theme.palette.primary.main}
      />
      <mask
        id="mask0_3:74"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="24"
        y="25"
        width="398"
        height="463"
      >
        <path
          d="M134.431 60.1053C213.421 -5.36592 408.06 29.2314 420.192 110.198C432.324 191.165 317.086 475.876 240.149 487.404C163.211 498.933 38.5864 318.006 26.4544 237.039C14.3224 156.072 55.4412 125.577 134.431 60.1053Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3:74)">
        <rect
          x="-9.06876"
          y="30.6053"
          width="474"
          height="474"
          fill="url(#pattern0)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_3:74" transform="scale(0.000520833)" />
        </pattern>
        <image
          id="image0_3:74"
          width="1920"
          height="1920"
          href={profileImage}
        />
      </defs>
    </svg>
  );
};

export const LandingPage = () => {
  const theme = useTheme();
  const location = window.location;
  const hostname =
    location.hostname === "localhost" ? location.host : location.hostname;
  return (
    <div className="page-container">
      <Container maxWidth="xl">
        <Grid container spacing={0} className="">
          <HeroSection
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
        </Grid>
      </Container>
    </div>
  );
};
