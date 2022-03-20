import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { useLocation } from "react-router";

import "./globalNav.css";

export const MobileDrawer = ({ links, activeLink }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "eraserHead",
        flexGrow: 1,
        flexShring: 0,
        padding: "1em",
        display: { xs: "flex", md: "none" },
        flexFlow: "column",
      }}
    >
      {links.map((link) => (
        <Link href={link.path} underline="none">
          <Typography
            variant="body2"
            component="a"
            className="global-nav__link"
            sx={{
              color: "bakugoLight",
              borderBottom: `4px solid ${
                activeLink === link.path
                  ? theme.palette.primary.main
                  : "transparent"
              }`,
            }}
          >
            {link.label}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

const MobileNav = ({ links, activeLink, open, toggleMenu }) => {
  return (
    <div>
      <IconButton id="openmenu" onClick={toggleMenu}>
        <MenuIcon sx={{ color: "bakugoLight" }} />
      </IconButton>
      <Drawer
        anchor="left"
        sx={{
          width: "max(40%, 150px)",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "max(40%, 150px)",
            boxSizing: "border-box",
          },
        }}
        open={open}
        variant="temporary"
        onClose={toggleMenu}
      >
        <MobileDrawer links={links} activeLink={activeLink} />
      </Drawer>
    </div>
  );
};

export const GlobalNav = ({ toggleDarkMode }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const activeLink = location.pathname;
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  const links = [
    {
      label: "about",
      path: "/about",
    },
    {
      label: "blog",
      path: "/blog",
    },
    // {
    //   label: "projects",
    //   path: "/projects",
    // },
  ];

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <AppBar position="static" className="page-nav global-nav">
      <Toolbar className="global-nav__container" sx={{ bgcolor: "eraserHead" }}>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <MobileNav
            links={links}
            activeLink={activeLink}
            open={displayMenu}
            toggleMenu={toggleMenu}
          />
        </Box>
        <Link href="/" underline="none">
          <Typography
            variant="h3"
            component="a"
            className="global-nav__page-header global-nav__link"
            sx={{ color: "bakugoLight" }}
          >
            stephen kernan
          </Typography>
        </Link>

        <Box
          className="global-nav__middle-section"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {links.map((link) => (
            <Link href={link.path} underline="none">
              <Typography
                variant="body2"
                component="a"
                className="global-nav__link"
                sx={{
                  color: "bakugoLight",
                  borderBottom: `4px solid ${
                    activeLink === link.path
                      ? theme.palette.primary.main
                      : "transparent"
                  }`,
                }}
              >
                {link.label}
              </Typography>
            </Link>
          ))}
        </Box>

        <div className="global-nav__settings">
          <Switch
            inputProps={{ "aria-label": "dark-mode" }}
            defaultChecked={isDarkMode}
            onClick={toggleDarkMode}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};
