import { useState } from 'react';
import { Backdrop, Box, Button } from '@mui/material';

import i18n from '../i18n';

export default function WelcomeAnime() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(true);

  const handleToggleZh = () => {
    setExpanded(!expanded);
    i18n.changeLanguage("zh-TW")
    setInterval(() => {
      setExpanded2(false)
    }, 1500);
  };
  const handleToggleEn = () => {
    setExpanded(!expanded);
    i18n.changeLanguage("en")
    setInterval(() => {
      setExpanded2(false)
    }, 1500);
  };

  return (
    <Backdrop sx={{
      color: '#fff',
      backgroundColor: "#00000000",
      zIndex: (theme) => theme.zIndex.drawer + 1
    }}
      open={expanded2}
    // open={true}
    >
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          width: "100%",
          // animation: expanded ? 'left-side 2s infinite' : undefined,
          transition: 'transform 0.5s ease',
          transform: expanded ? 'rotate(90deg)' : 'rotate(0)',
        }}
      >
        <Button
          variant="contained"
          onClick={handleToggleZh}
          sx={{
            flex: 1,
            borderRadius: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'secondary.800', // 左邊的顏色
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            // transition: 'transform 0.5s ease, scale 0.3s ease, translate 3s ease-in',
            // '&:hover': {
            //   transform: 'scale(1.1)',
            // },
            // transform: expanded ? "scale(1,3) translate(-100%)" : undefined
            // animation: expanded ? 'left-side 2s forwards' : undefined,
            animation: expanded ? 'left-side 2s forwards' : undefined,
          }}
        >
          {expanded ? "" : "中文"}
        </Button>
        {/* <Box sx={{ width: '20px',background: "#fff" }}></Box> */}
        {/* <Button
          onClick={handleToggle}
          sx={{
            backgroundColor: '#333',
          }}
        >
        </Button> */}
        <Button
          variant="contained"
          onClick={handleToggleEn}
          sx={{
            flex: 1,
            borderRadius: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.800', // 右邊的顏色
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            animation: expanded ? 'right-side 2s forwards' : undefined,
            // transition: 'transform 0.5s ease, scale 0.3s ease',
            // transform: expanded ? "scale(1,3)" : undefined
            // '&:hover': {
            //   transform: 'scale(1.1)',
            // },
          }}
        >
          {expanded ? "" : "English"}
        </Button>
      </Box>
    </Backdrop>
  );
}
