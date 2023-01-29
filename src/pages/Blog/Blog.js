import { Container, Typography } from "@mui/material";
import React from "react";
import { BlogTile } from "./BlogTile";
import { useTheme } from "@mui/system";
import "./blog.css";
import { SEO } from "../../Components/SEO/SEO";

const categories = [
  {
    url: "/learn-to-code",
    title: "Learning to Code",
  },
];

export const Blog = ({ description }) => {
  const theme = useTheme();

  return (
    <div className="page-container">
      <SEO pageTitle={"Blog"} description={description} />

      <Container maxWidth="lg" className="content-container">
        <Typography variant="huge" sx={{ color: theme.playerOne }}>
          Blog
        </Typography>
        <div className="blog-grid">
          {categories.map((category, index) => (
            <BlogTile number={index} {...category} />
          ))}
        </div>
      </Container>
    </div>
  );
};
