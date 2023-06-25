import React from 'react'
import {
  Box,
  IconButton,
  Typography,
  Table,
  TableRow,
  TableCell,
  type TableCellProps,
  TableBody
} from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import styled from '@emotion/styled'

const theme = createTheme({
  typography: {
    fontFamily: ['PixelMplus'].join(',')
  }
})

const CustomTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
  borderBottom: 'none',
  padding: 0
}))

const links = [
  { icon: <TwitterIcon />, link: 'https://twitter.com/0n1shi' },
  { icon: <GitHubIcon />, link: 'https://github.com/0n1shi' }
]

const affiliations = [
  { period: '2017/04 ~ 2021/12', name: 'さくらインターネット株式会社' },
  { period: '2022/01 ~ ', name: 'GMOサイバーセキュリティ byイエラエ株式会社' }
]

function App (): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4">Kazuki Onishi</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {links.map(({ icon, link }) => (<IconButton href={link} key={link} target="_blank">{icon}</IconButton>))}
        </Box>
        <Typography variant="body2">
          I am a software developer. I love 💻 📚 🍔 🎮.
        </Typography>
        <Typography variant="body2">
          Linux / OS / CPU / File System / Security
        </Typography>
        <Table sx={{ maxWidth: 440, marginTop: 1 }}>
          <TableBody>
            {affiliations.map(({ period, name }) => (
            <TableRow key={name}>
              <CustomTableCell>{period}</CustomTableCell>
              <CustomTableCell>: {name}</CustomTableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </ThemeProvider>
  )
}

export default App
