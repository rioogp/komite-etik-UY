import { createTheme } from "@mui/material";

const customTeal = "#006A74";

export const theme = createTheme({
  palette: {
    success: {
      main: customTeal,
    },
    info: {
      main: "#fff",
    },
  },
  typography: {
    fontSize: 15,
    fontWeightMedium: "600",
    fontFamily: "'Inter', sans-serif",
  },
});
