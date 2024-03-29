import { Button, Typography } from "@mui/material";
import React from "react";

import styles from "./heroSection.module.css";
import Link from "next/link";

export const HeroSection = ({
  huge = false,
  float,
  image,
  headerText,
  paragraphText,
  buttonLabel,
  buttonLink,
  buttonVariant = "contained",
}) => {
  const isExternalLink = buttonLink && buttonLink.includes("http");
  if (!float) return null;

  return (
    <div
      className={`
        ${styles["hero-section__grid"]} 
        ${float ? styles[float] : ""} 
        ${huge ? "huge" : ""}
      `}
    >
      <div className={styles["hero-section__title"]}>
        <Typography
          variant={huge ? "huge" : "semiHuge"}
          component="h1"
          color="primary"
        >
          {headerText}
        </Typography>
      </div>
      <div className={styles["hero-section__paragraph"]}>
        <Typography variant="body1" component="p" sx={{ maxWidth: "80ch" }}>
          {paragraphText}
        </Typography>
      </div>
      <div className={styles["hero-section__button"]}>
        {buttonLabel && (
          <Link
            href={buttonLink}
            underline="none"
            target={isExternalLink ? "_blank" : "_self"}
          >
            <Button
              variant={buttonVariant}
              color="primary"
              sx={{ fontSize: "1.25rem", fontWeight: "600" }}
            >
              {buttonLabel}
            </Button>
          </Link>
        )}
      </div>
      {image ? (
        <div className={styles["hero-section__image"]}>{image}</div>
      ) : null}
    </div>
  );
};
