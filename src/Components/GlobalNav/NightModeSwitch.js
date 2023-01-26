import { FormControlLabel, Switch, styled } from "@mui/material";

export const NightModeSwitch = ({ mobile, onClick, checked = true }) => {
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
