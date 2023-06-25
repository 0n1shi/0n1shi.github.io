import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableCellProps,
  TableBody,
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

const CustomTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
  borderBottom: "none",
  padding: 0,
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
          <IconButton href="https://twitter.com/0n1shi" target="_blank">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://github.com/0n1shi" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Box>
        <Typography variant="body2">
          I am a software developer. I love 💻 📚 🍔 🎮.
        </Typography>
        <Typography variant="body2">
          Linux / OS / CPU / File System / Security
        </Typography>
        <Table sx={{ maxWidth: 440, marginTop: 1 }}>
          <TableBody>
            <TableRow>
              <CustomTableCell>2017/04 ~ 2021/12</CustomTableCell>
              <CustomTableCell>: さくらインターネット株式会社</CustomTableCell>
            </TableRow>
            <TableRow>
              <CustomTableCell>2022/01 ~ </CustomTableCell>
              <CustomTableCell>
                : GMOサイバーセキュリティ byイエラエ株式会社
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table sx={{ maxWidth: 440, marginTop: 1 }}>
          <TableBody>
            <TableRow>
              <CustomTableCell>: さくらインターネット株式会社</CustomTableCell>
            </TableRow>
            <TableRow>
              <CustomTableCell>
                : GMOサイバーセキュリティ byイエラエ株式会社
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </ThemeProvider>
  );
}

export default App;
