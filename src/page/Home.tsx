import { Fab } from "@mui/material"
import { Container, Box, Stack } from "@mui/system"
import { HiLighter } from "../components/helper/HiLighter"
import { TypeWriter } from "../components/helper/TypeWriter"
import Grid from '@mui/material/Unstable_Grid2';

import HomeMain from '/img/home.svg'
// import HomeMain from '/img/exam/home-main.svg'
import avatar from '/img/avatar.jpg'
import Github from '/img/github.svg'
import Email from '/img/email.svg'
import LinkedIn from '/img/linkedIn.svg'
import LogoMat from '/img/logo-mat.svg'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t, i18n } = useTranslation()
  return (<Container>
    <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
      <Grid xs={12} md={7} sx={{ px: { xs: 3, md: 8 }, pt: { xs: 4, md: 8 } }}>
        <h1>{t('main.banner.1')}</h1>
        <h1>{t('main.banner.2')}<HiLighter>{t('main.banner.3')}</HiLighter> </h1>
        {/* <Typography variant='h2'>
        I'm <HiLighter>Randy Lin</HiLighter>
      </Typography> */}
        <h1>{t('main.banner.4')}<HiLighter><TypeWriter /></HiLighter></h1>
      </Grid>
      <Grid xs={12} md={5}>
        <img src={HomeMain} alt="HomeMain" style={{ height: "auto", maxWidth: "100%" }} />
      </Grid>
      {/* <Grid xs={12} md={12}> */}
      <Grid xs={12} md={4} sx={{ mt: { xs: 0, md: 12 }, p: { xs: 2, md: 4 }, display: "flex", justifyContent: "center", order: { xs: 2, md: 0 } }}>
        <img src={avatar} alt="avatar" style={{ height: "auto", width: "100%", maxWidth: "280px", borderRadius: "50%" }} />
      </Grid>
      <Grid display={i18n.language == "en" ? "block" : "none"} xs={12} md={8} sx={{ mt: { xs: 0, md: 12 }, px: { xs: 3, md: 6 }, py: { xs: 2, md: 0 }, order: { xs: 1, md: 0 } }}>
        <h1 style={{ textTransform: 'uppercase', textAlign: "center", marginBottom: "32px" }}>Allow me to <HiLighter>introduce</HiLighter> myself</h1>
        <p style={{ fontSize: "20px" }}>
          I like programming, and I also like to <HiLighter>create useful programs</HiLighter> to help users.
          <br /><br />
          I'm using classics langauges like <HiLighter>TypeScript, C++</HiLighter> and <HiLighter>Python</HiLighter>.
          <br /><br />
          I'm proficient in <HiLighter>React, Vite, GIS</HiLighter> (Geographic Information Systems) and <HiLighter>QT Application</HiLighter>.
          <br /><br />
          I'm eagerly seeking the next phase of my career in programming, where I can dedicate my efforts to the programming I'm passionate about.
          <br /><br />
          If you happen to be looking for someone proficient in <HiLighter>TypeScript, React</HiLighter>, or if you are looking for a <HiLighter>fast learner</HiLighter> and a <HiLighter>team player</HiLighter>, please feel free to <HiLighter>reach out</HiLighter> to me.
        </p>
      </Grid>
      <Grid display={i18n.language == "en" ? "none" : "block"} xs={12} md={8} sx={{ mt: { xs: 0, md: 12 }, px: { xs: 3, md: 6 }, py: { xs: 2, md: 0 }, order: { xs: 1, md: 0 } }}>
        <h1 style={{ textTransform: 'uppercase', textAlign: "center", marginBottom: "32px" }}>請讓我 <HiLighter>介紹</HiLighter> 我自己！</h1>
        <p style={{ fontSize: "20px" }}>
          我喜歡撰寫程式碼，而且我也喜歡 <HiLighter>創造有用的程式</HiLighter> 來幫助使用者解決問題。
          <br /><br />
          我使用的主要語言為 <HiLighter>TypeScript</HiLighter> 及 <HiLighter>C++</HiLighter> ，另外我也會編寫 <HiLighter>Python</HiLighter> 程式。
          <br /><br />
          我專精於 <HiLighter>React, Vite, GIS</HiLighter> (Geographic Information Systems) 以及 <HiLighter>QT Application</HiLighter>.
          <br /><br />
          我期許我的能力能不斷提升，並且學習到更多的新知識、新技術、新工具，創造有價值的程式，為社會盡一份能力。
          <br /><br />
          如果您正在尋找一位精通 <HiLighter>TypeScript, React</HiLighter> 的程式設計師，或者您需要一位 <HiLighter>學習能力強</HiLighter> 而且善於 <HiLighter>團隊合作</HiLighter> 的程式設計師，請隨時<HiLighter>聯繫</HiLighter>我，期待我的能力能為您所用！
        </p>
      </Grid>
      {/* </Grid> */}
      <Grid xs={12} md={12} sx={{ order: { xs: 3, md: 0 } }}>
        <h1 style={{ textAlign: "center", margin: "50px auto 10px auto" }}> <HiLighter>{t('main.contact.1')}</HiLighter>{t('main.contact.2')}</h1>
        <Box sx={{ display: 'flex', justifyContent: "center" }}>
          <Stack direction="row" spacing={1}>
            <Fab size="small" href='https://github.com/linyejoe2' aria-label="go to My Github" target='github' title='My GitHub'>
              <img src={Github} height={25} width={25} />
            </Fab>
            <Fab size="small" href='mailto:linyejoe2@gmail.com' aria-label="contact me with email" title='My Email'>
              <img src={Email} height={25} width={25} />
            </Fab>
            <Fab size="small" href='https://www.linkedin.com/in/randy-lin/' aria-label="go to My LinkedIn" target='linkedin' title='My LinkedIn'>
              <img src={LinkedIn} height={25} width={25} />
            </Fab>
            <Fab size="small" href='https://linyejoe2.github.io/' aria-label="go to My Blog" target='blog' title='My Blog'>
              <img src={LogoMat} height={25} width={25} />
            </Fab>
          </Stack>
        </Box>
      </Grid>
      {/* <Grid xs={12} md={12}>
        
      </Grid> */}
    </Grid>
  </Container>)
}