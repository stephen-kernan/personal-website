import { Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import { getThemeColor } from "../../helpers/theme.helpers";
import styles from "../../../pages/blog/Blog.module.css";

export const BlogTile = ({ number, title, url }) => {
  const theme = useTheme();
  const shouldInvert = Math.floor(number / 4) % 2 === 1;
  const themeColor = getThemeColor(number, theme, shouldInvert);

  const redirectToURL = () => {
    window.location = window.location + url;
  };

  return (
    <div
      className={styles["blog-tile"]}
      style={{ backgroundColor: themeColor }}
      onClick={redirectToURL}
    >
      <Typography variant="h2" sx={{ color: theme.eraserHead }}>
        {title}
      </Typography>
    </div>
  );
};
