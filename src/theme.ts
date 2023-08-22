import { ThemeOptions, createTheme } from '@mui/material/styles'
import { purple, deepPurple } from '@mui/material/colors';
import CubicTTF from '/font/Cubic_11_1.010_R.ttf'
import RainyHeartsTTF from '/font/rainyhearts.ttf'

const themeDefaultOption: ThemeOptions = {
  typography: {
    fontFamily: ['Cubic', 'RainyHearts',].join(",")
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          background-image: none !important;
        }
        @font-face {
          font-family: 'Cubic';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${CubicTTF}) format('truetype');
        }
        @font-face {
          font-family: 'RainyHearts';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${RainyHeartsTTF}) format('truetype');
        }
      `,
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }
}

export const lightMode = createTheme({
  palette: {
    mode: 'light'
  },
  ...themeDefaultOption
})

export const darkMode = createTheme({
  palette: {
    //link:  https://mui.com/material-ui/customization/color/
    mode: 'dark',
    text: {
      primary: "#fff",
      secondary: "#ba68c8",
    },
    primary: purple,
    secondary: deepPurple,
    info: {
      main: "#e872e6"
    },
    background: {
      default: "#0e021d",
      "paper": "#2a1742"
    }
  },
  ...themeDefaultOption
})
