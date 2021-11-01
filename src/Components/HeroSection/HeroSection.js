import { Button, Grid, Typography } from "@mui/material";
import React from "react";

import "./heroSection.css";

export const HeroSection = ({
  float,
  image,
  headerText,
  paragraphText,
  buttonLabel,
  buttonVariant = "contained",
}) => {
  if (!float) return null;

  if (float === "right")
    return (
      <Grid container spacing={0} className="hero-section__container">
        <Grid item xs={12} md={8} className="hero-section__text-container">
          <Typography variant="h1" component="h1" color="primary">
            {headerText}
          </Typography>
          <Typography variant="body1" component="p" sx={{ maxWidth: "80ch" }}>
            {paragraphText}
          </Typography>
          {buttonLabel && (
            <Button
              variant={buttonVariant}
              color="primary"
              sx={{ fontSize: "1.25rem", fontWeight: "600" }}
            >
              {buttonLabel}
            </Button>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          {image}
        </Grid>
      </Grid>
    );

  if (float === "left")
    return (
      <Grid container spacing={0} className="hero-section__container">
        <Grid item xs={12} md={4}>
          {image}
        </Grid>
        <Grid item xs={12} md={8} className="hero-section__text-container">
          <Typography variant="h1" component="h1" color="primary">
            {headerText}
          </Typography>
          <Typography variant="body1" component="p" sx={{ maxWidth: "80ch" }}>
            {paragraphText}
          </Typography>
          {buttonLabel && (
            <Button
              variant={buttonVariant}
              color="primary"
              sx={{ fontSize: "1.25rem", fontWeight: "600" }}
            >
              {buttonLabel}
            </Button>
          )}
        </Grid>
      </Grid>
    );
};
