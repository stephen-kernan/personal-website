import {
  AppBar,
  Badge,
  Box,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Modal,
  Select,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState } from "react";
import { useLocation } from "react-router";

import "./globalNav.css";

export const SettingsModal = ({ changeTheme, onClose }) => {
  const [activeTheme, setActiveTheme] = useState(
    localStorage.getItem("themeColor") || "deku"
  );

  const globalTheme = useTheme();

  const themes = [
    {
      label: "Deku",
      value: "deku",
    },
    {
      label: "Shoto Todoroki",
      value: "shoto",
    },
    {
      label: "LeMillion",
      value: "leMillion",
    },
    {
      label: "Shinso",
      value: "shinso",
    },
    {
      label: "Dabi",
      value: "dabi",
    },
  ];

  const selectTheme = ({ target: { value } }) => {
    setActiveTheme(value);
    changeTheme(value);
  };

  return (
    <Modal
      open
      onClose={onClose}
      aria-labelledby="settings-modal-title"
      aria-describedby="settings-modal-description"
    >
      <Box
        sx={{
          pb: 4,
          color: "text.primary",
          m: "auto",
          width: "40%",
          height: "min-content",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          bgcolor: "background.paper",
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          id="settings-modal-title"
          data-testid="settings-modal-title"
          sx={{ color: "primary.main" }}
        >
          Display Settings
        </Typography>
        <Typography
          variant="p"
          component="p"
          id="settings-modal-description"
          data-testid="settings-modal-description"
        >
          Choose one of the following to customize the theme.
        </Typography>
        <FormControl style={{ width: "75%" }}>
          <InputLabel id="theme-select-label">Theme</InputLabel>
          <Select
            inputLabelProps={{
              style: { color: globalTheme.palette.primary.main },
            }}
            xs={{ color: "primary.main", borderColor: "primary.main" }}
            labelId="theme-select-label"
            data-testid="theme-select"
            id="theme-select"
            value={activeTheme || "deku"}
            label="Theme"
            onChange={selectTheme}
          >
            {themes.map((theme) => (
              <MenuItem
                value={theme.value}
                sx={{ display: "flex", flexFlow: "row" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "25px",
                    marginRight: "5px",
                    backgroundColor: globalTheme.palette[theme.value],
                  }}
                ></div>
                {theme.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Modal>
  );
};

export const GlobalNav = ({ changeTheme, toggleDarkMode }) => {
  const [modal, setModal] = useState(null);
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

  const toggleSettingsModal = () => {
    setModal(modal ? null : "settings");
  };

  return (
    <AppBar position="static" className="page-nav global-nav">
      <Toolbar className="global-nav__container" sx={{ bgcolor: "eraserHead" }}>
        <Link href="/" underline="none">
          <Typography
            variant="h2"
            component="a"
            className="global-nav__page-header global-nav__link"
            sx={{ color: "bakugoLight" }}
          >
            stephen kernan
          </Typography>
        </Link>

        <div className="global-nav__middle-section">
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
        </div>

        <div className="global-nav__settings">
          <Switch
            inputProps={{ "aria-label": "dark-mode" }}
            defaultChecked={isDarkMode}
            onClick={toggleDarkMode}
          />
          <IconButton onClick={toggleSettingsModal}>
            <SettingsIcon sx={{ color: "bakugoLight" }} />
          </IconButton>
        </div>
      </Toolbar>

      {modal === "settings" && (
        <SettingsModal
          changeTheme={changeTheme}
          onClose={toggleSettingsModal}
        />
      )}
    </AppBar>
  );
};
