import {
  AppBar,
  Container,
  Link,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import profileImage from "../../images/profile-pic-edited.png";

export const LandingPage = () => {
  return (
    <div className="page-container">
      <Container maxWidth="xl">
        <Paper className="dark-mode-paper" elevation={2}>
          <svg
            width="472"
            height="514"
            viewBox="0 0 472 514"
            fill="none"
          >
            <path
              d="M219.047 140.338C298.037 74.8665 408.06 29.2314 420.192 110.198C432.324 191.165 317.086 475.876 240.149 487.404C163.211 498.933 38.5864 318.006 26.4544 237.039C14.3224 156.072 140.057 205.809 219.047 140.338Z"
              fill="#20C1FE"
            />
            <mask
              id="mask0_3:74"
              style={{ maskType: 'alpha' }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="472"
              height="514"
            >
              <path
                d="M134.431 60.1053C213.421 -5.3659 408.06 29.2314 420.192 110.198C432.324 191.165 317.086 475.876 240.149 487.404C163.211 498.933 38.5864 318.006 26.4544 237.039C14.3224 156.072 55.4412 125.576 134.431 60.1053Z"
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
              {/* <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image0_3:74" transform="scale(0.000520833)" />
              </pattern> */}
              <image
                id="image0_3:74"
                width="1920"
                height="1920"
                src={profileImage}
              />
            </defs>
          </svg>
        </Paper>
      </Container>
    </div>
  );
};
