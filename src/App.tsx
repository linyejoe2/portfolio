import { darkMode, lightMode } from "./theme";
import { purple } from '@mui/material/colors'

import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux'
import { TStore } from './service/store'
import TopNavigationBar from './components/TopNavigationBar'
import Home from './page/Home'
import { Route, RouterProvider } from "react-router";
import { Router } from "./Router";
import Loading from "./components/Loading";
const env = import.meta.env

export default function MyApp() {
  // return (<Box>Raleway 字形測試</Box>)
  console.log(env.VITE_DEV_MODE)
  const darkTheme = useSelector((state: TStore) => state.darkMode);
  return (
    <>
      <ThemeProvider theme={darkTheme ? darkMode : lightMode}>
        <CssBaseline />
        <TopNavigationBar /><Box sx={{ height: '70px', '@media (max-width: 900px)': { height: '40px' } }} />
        {env.VITE_DEV_MODE == 'true' ? undefined : <Loading />}
        <RouterProvider router={Router} />
        <Box
          bgcolor={purple}
          sx={{
            height: "60px",
            marginTop: "100px",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.paper"
          }}>
          Copyright © 2023 linyejoe2

        </Box>
      </ThemeProvider>
    </>
  );
}