import React from 'react'
import {
  Box,
  IconButton,
  Typography,
  Table,
  TableRow,
  TableCell,
  type TableCellProps,
  TableBody,
  Avatar,
  TableHead,
  Link,
  type LinkProps
} from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
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
  padding: 0,
  minWidth: 120
}))

const CustomLink = styled(Link)<LinkProps>(({ theme }) => ({
  textDecorationColor: '#000',
  textDecoration: 'none',
  color: '#000',
  '&:hover': {
    textDecoration: 'underline'
  }
}))

const links = [
  { icon: <TwitterIcon sx={{ color: '#1DA1F2;' }} />, link: 'https://twitter.com/0n1shi' },
  { icon: <GitHubIcon sx={{ color: 'black' }} />, link: 'https://github.com/0n1shi' },
  { icon: <Avatar src="/images/hatebu_logo.jpg" sx={{ width: 24, height: 24 }} />, link: 'https://0n1shi.hatenablog.jp/' },
  { icon: <Avatar src="/images/zenn_logo.jpg" sx={{ width: 24, height: 24 }} />, link: 'https://zenn.dev/0n1shi' },
  { icon: <Avatar src="/images/speaker_deck_logo.png" sx={{ width: 24, height: 24 }} />, link: 'https://speakerdeck.com/0n1shi' }
]

const affiliations = [
  { period: '2017/04 ~ 2021/12', name: 'さくらインターネット株式会社' },
  { period: '2022/01 ~ ', name: 'GMOサイバーセキュリティ byイエラエ株式会社' }
]
const certifications = [
  'TOEIC 860 点',
  '実用英語技能検定 準一級',
  '基本情報技術者試験 合格',
  '応用情報技術者試験 合格',
  '情報セキュリティスペシャリスト試験 合格',
  'Oracle Certified Java Programmer, Gold SE 7',
  'AWS Certified Solutions Architect – Professional'
]
const talks = [
  { title: 'Linux Kernel 勉強会　2018 年 12 月分', link: 'https://linux-kernel.connpass.com/event/106728/' },
  { title: 'Linux Kernel 勉強会　2018 年 7 月分', link: 'https://linux-kernel.connpass.com/event/92896/' },
  { title: 'Hosting Casual Talks #5', link: 'https://connpass.com/event/120048/' },
  { title: 'Kyoto.なんか #5', link: 'https://kyoto-nanka.connpass.com/event/141982/' },
  { title: 'さくらの夕べ ヤンジェネバトル', link: 'https://sakura-tokyo.connpass.com/event/146504/' },
  { title: 'Hacobuneオープンβ版提供開始発表会', link: 'https://speakerdeck.com/hacobune/hacobunefalsegoshao-jie' }
]
const slides = [
  { title: 'プロセスとコンテキストスイッチ', link: 'https://www.slideshare.net/ssuserc2d4c1/ss-124497965' },
  { title: 'ラズパイでデバイスドライバを作ってみた。', link: 'https://www.slideshare.net/ssuserc2d4c1/ss-124497785' },
  { title: 'カーネルから見る OCI ランタイム', link: 'https://speakerdeck.com/0n1shi/kanerukarajian-ru-ocirantaimu' },
  { title: 'コンテナの実現とその実装', link: 'https://speakerdeck.com/0n1shi/kontenafalseshi-xian-tosofalseshi-zhuang' },
  { title: 'パーティションとファイルシステムと', link: 'https://speakerdeck.com/0n1shi/pateisiyontohuairusisutemuto' },
  { title: 'コンテナエンジンの作り方 ~ さくらの夕べ ヤンジェネバトル ~', link: 'https://speakerdeck.com/0n1shi/kontenaenzinfalsezuo-rifang-sakurafalsexi-be-yanzienebatoru' }
]

const softwares = [
  { title: 'runb (OCI-layer Linux container runtime written in Shell)', link: 'https://github.com/0n1shi/runb' },
  { title: 'Disassembler for customed 8-bit microprocessor written in Golang.', link: 'https://github.com/0n1shi/dines' },
  { title: 'GPIO Driver for Raspberry Pi', link: 'https://github.com/0n1shi/gpio-driver' },
  { title: 'VGA Driver for bare metal', link: 'https://gist.github.com/0n1shi/24b945209bf97051fe36955b80e9f91a' },
  { title: 'MIP 1 emulator written in Golang', link: 'https://github.com/0n1shi/mipsemu' },
  { title: 'MIPS architecture processor on Intel FPGA for learning.', link: 'https://github.com/0n1shi/fpga-mips' }
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
        <Avatar src="/images/icon.jpeg" sx={{ width: 100, height: 100, marginBottom: 1 }} />
        <Typography variant="h4">Kazuki Onishi</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 1
          }}
        >
          {links.map(({ icon, link }) => (<IconButton href={link} key={link} target="_blank">{icon}</IconButton>))}
        </Box>
        <Typography variant="body2">
          I am a software developer in Kyoto, Japan.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          I love 💻 📚 🍔 🎮.
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          Linux / OS / CPU / File System / Security
        </Typography>
        <Table sx={{ maxWidth: 440, marginBottom: 2 }}>
          <TableBody>
            {affiliations.map(({ period, name }) => (
              <TableRow key={name}>
                <CustomTableCell>{period}</CustomTableCell>
                <CustomTableCell>: {name}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table sx={{ maxWidth: 440, marginBottom: 2 }}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Certifications</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {certifications.map(cert => (
              <TableRow key={cert}>
                <CustomTableCell>・{cert}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table sx={{ maxWidth: 440, marginBottom: 2 }}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Talks</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {talks.map(talk => (
              <TableRow key={talk.title}>
                <CustomTableCell><CustomLink href={talk.link} target="_blank">・{talk.title} <OpenInNewIcon sx={{ width: 13, height: 13 }} /></CustomLink></CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table sx={{ maxWidth: 440, marginBottom: 2 }}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Slides</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slides.map(slide => (
              <TableRow key={slide.title}>
                <CustomTableCell><CustomLink href={slide.link} target="_blank">・{slide.title} <OpenInNewIcon sx={{ width: 13, height: 13 }} /></CustomLink></CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table sx={{ maxWidth: 440 }}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Softwares</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {softwares.map(software => (
              <TableRow key={software.title}>
                <CustomTableCell><CustomLink href={software.link} target="_blank">・{software.title} <OpenInNewIcon sx={{ width: 13, height: 13 }} /></CustomLink></CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </ThemeProvider>
  )
}

export default App
