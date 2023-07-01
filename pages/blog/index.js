import { Container, Typography } from "@mui/material";
import React from "react";
import { BlogTile } from "../../src/Components/Blog/BlogTile";
import { useTheme } from "@mui/system";
import styles from "./Blog.module.css";
import { SEO } from "../../src/Components/SEO/SEO";
import { GlobalNav } from "../../src/Components/GlobalNav/GlobalNav";

const categories = [
  {
    url: "/learn-to-code",
    title: "Learn to Code: Getting Started",
  },
  {
    url: "/prop-constructor-pattern",
    title: "Simplify Tests for React Components",
  },
];

export const Blog = ({ description }) => {
  const theme = useTheme();

  return (
    <div className="page-container">
      <SEO pageTitle={"Blog"} description={description} />

      <GlobalNav activeLink={"blog"} />

      <Container maxWidth="lg" className="content-container">
        <Typography variant="huge" sx={{ color: theme.playerOne }}>
          Blog
        </Typography>
        <div className={styles["blog-grid"]}>
          {categories.map((category, index) => (
            <BlogTile number={index} {...category} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
