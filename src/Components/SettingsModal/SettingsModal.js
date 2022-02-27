import { FormControl, InputLabel, MenuItem, Modal, Select, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

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
          mx: "auto",
          width: "min(90%, 500px)",
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
