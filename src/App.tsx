import { Box, Divider, IconButton, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["PixelMplus"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Kazuki Onishi</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton href="https://twitter.com/0n1shi">
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </Box>
        <Typography variant="body2">
          Software developer. I love 📚 🍔 🎮
        </Typography>
        <Divider sx={{ width: "60%" }} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
