import React from "react";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  DividerProps,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import styled from "@emotion/styled";

const theme = createTheme({
  typography: {
    fontFamily: ["PixelMplus"].join(","),
  },
});

const CustomDivider = styled(Divider)<DividerProps>(({ theme }) => ({
  width: "60%",
  marginTop: 10,
  marginBottom: 10,
}));

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
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
        <Typography variant="body2">
          Software developer. I love 📚 🍔 🎮.
        </Typography>
        <CustomDivider />
        <Typography variant="body2">
          2017/04 ~ 2021/12: さくらインターネット株式会社
        </Typography>
        <Typography variant="body2">
          2022/01 ~ now: GMOサイバーセキュリティ byイエラエ株式会社
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
