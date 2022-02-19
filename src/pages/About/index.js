import { Container, Grid, Link, Typography, useTheme } from "@mui/material";
import React from "react";
import { EquipmentSVG } from "../../Components/SVGs/EquipmentSVG";
import { HobbiesSVG } from "../../Components/SVGs/HobbiesSVG";

export const About = () => {
  const theme = useTheme();
  return (
    <div className="page-container">
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1" color="primary">
          About Me
        </Typography>

        {/* CURRENT HOBBIES */}
        <Grid container spacing={0}>
          <Grid item xs={9}>
            <Typography variant="h2" component="h2" color="primary">
              Current Hobbies
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Anime</strong> - Jujutsu Kaisen
            </Typography>
            <Typography variant="body1" component="p">
              <strong>TV Show</strong> - Avatar The Last Airbender
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Book</strong> - Dune
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Next Movie</strong> - Eternals
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Learning</strong> - Piano / Material UI
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Video Games</strong> - Angry Birds 2 (don't judge)
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "flex-start" }}>
            <HobbiesSVG theme={theme} />
          </Grid>
        </Grid>

        {/* EQUIPMENT */}
        <Grid container spacing={0}>
          <Grid item xs={9}>
            <Typography variant="h2" component="h2" color="primary">
              My Equipment
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Monitor</strong> -
              <Link href="https://amzn.to/3lS1gqe">
                {" "}
                ASUS VA24DQ Monitor x 2
              </Link>
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Keyboard</strong> -{" "}
              <Link href="https://amzn.to/3lUqjZL">Logitech MX Keys</Link>
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Monitor Arm</strong> -{" "}
              <Link href="https://amzn.to/3AVqt7e">
                Northern Bayou Monitor Arms x 2
              </Link>
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Mouse</strong> -{" "}
              <Link href="https://amzn.to/3BVyvOJ">Logitech MX Master 3</Link>
            </Typography>
            <Typography variant="body1" component="p">
              <strong>Microphone</strong> -{" "}
              <Link href="https://amzn.to/3BWIwLM">Blue Yeti Microphone</Link>
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "flex-start" }}>
            <EquipmentSVG theme={theme} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
