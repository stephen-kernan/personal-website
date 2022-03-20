import {
  AppBar,
  Box,
  Divider,
  Drawer,
  FormControlLabel,
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
import { styled } from "@mui/system";

const NightModeSwitch = ({ mobile, onClick, checked = true }) => {
  const StyledSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    marginTop: mobile ? "1rem" : 0,
    marginLeft: mobile ? "0 !important" : "1em",
    padding: 12,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      top: "2px",
      padding: 0,
      // transform: "translateX(0px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(30px)",
        "& .MuiSwitch-thumb:before": {
          content: "'🌙'",
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.eraserHead,
      border: `3px solid ${theme.palette.primary.main}`,
      width: 27,
      height: 27,
      "&:before": {
        content: "'☀️'",
        position: "absolute",
        width: "24px",
        height: "24px",
        fontSize: "0.75rem",
        left: 6,
        top: mobile ? 1 : -2,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "eraserHead",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <FormControlLabel
      control={<StyledSwitch sx={{ m: 1 }} checked={checked} />}
      label=""
      onClick={onClick}
    />
  );
};

export const MobileDrawer = ({
  links,
  activeLink,
  isDarkMode,
  toggleDarkMode,
}) => {
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
        <Link
          href={link.path}
          underline="none"
          sx={{
            marginBottom: "1rem",
          }}
        >
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
      <Divider variant="middle" sx={{ marginTop: "2rem" }} />
      <NightModeSwitch mobile onClick={toggleDarkMode} checked={isDarkMode} />
    </Box>
  );
};

const MobileNav = ({
  links,
  activeLink,
  isDarkMode,
  open,
  toggleMenu,
  toggleDarkMode,
}) => {
  return (
    <div>
      <IconButton id="openmenu" onClick={toggleMenu}>
        <MenuIcon sx={{ color: "bakugoLight" }} />
      </IconButton>
      <Drawer
        anchor="left"
        sx={{
          width: "max(50%, 180px)",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "max(50%, 180px)",
            boxSizing: "border-box",
          },
        }}
        open={open}
        variant="temporary"
        onClose={toggleMenu}
      >
        <MobileDrawer
          activeLink={activeLink}
          links={links}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
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
            activeLink={activeLink}
            isDarkMode={isDarkMode}
            links={links}
            open={displayMenu}
            toggleMenu={toggleMenu}
            toggleDarkMode={toggleDarkMode}
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

        <Box
          className="global-nav__settings"
          sx={{ visibility: { xs: "hidden", md: "visible" } }}
        >
          <NightModeSwitch onClick={toggleDarkMode} checked={isDarkMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
