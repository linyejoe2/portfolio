import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ButtonGroup, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon, SwipeableDrawer, useScrollTrigger } from '@mui/material';
import { store, darkModeActions, TStore } from '../service/store';
import { useSelector } from 'react-redux';


const pages = ['Home', 'About', 'Projects', 'Resume', 'Blogs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface Props {
  children: React.ReactElement;
}

export default function TopNavigationBar() {
  const darkTheme = useSelector((state: TStore) => state.darkMode);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleNavClick = (event: React.MouseEvent<HTMLElement>) => {
    const pageName = event.currentTarget.id
    if (pages.indexOf(pageName) == -1) return
    // if (pageName == 'Home') {}
    if (pageName == 'About') { store.dispatch(darkModeActions.toggle()) }
    if (pageName == 'Projects') { store.dispatch(darkModeActions.toggle()) }
  }

  const handleThemeButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    const n = event.currentTarget.id
    if (n == "Light") { store.dispatch(darkModeActions.setToLight()) }
    if (n == 'Dark') { store.dispatch(darkModeActions.setToDark()) }
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ElevationScroll>
      <AppBar component="nav" >
        <Container maxWidth="lg">
          <Toolbar sx={{
            '@media (max-width: 900px)': {
              paddingRight: "0px"
            }
          }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                // display: { xs: 'none', md: 'flex' },
                display: 'flex',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'text.primary',
                textDecoration: 'none',
                '@media (max-width: 900px)': {
                  width: "100%"
                }
              }}
            >
              Randy Lin
            </Typography>
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: "flex-end",
              // marginRight: { xs: '10px', md: '10px' }
            }}>
              {pages.map((page) => {
                const on = window.location.href.indexOf(page.toLowerCase()) != -1
                return (
                  <Button
                    id={page}
                    key={page}
                    onClick={handleNavClick}
                    sx={{
                      my: 2, color: 'text.primary', display: 'block',
                      "&::after": {
                        content: "''",
                        display: "block",
                        position: "relative",
                        bottom: '1px',
                        height: '2px',
                        background: "#c95bf5",
                        borderRadius: "16px",
                        transition: "all 0.3s",
                        zIndex: '-1',
                        width: on ? "100%" : '2px',
                        left: on ? "0" : "50%"
                      },
                      "&:hover::after": {
                        width: "100%",
                        left: "0",
                      }
                    }}
                  >
                    <Typography>
                      {page}
                    </Typography>
                    {/* <span>
                  </span> */}
                  </Button>
                )
              })}

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{
              flexGrow: 0,
              '@media (max-width: 900px)': {
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%'
              }
            }}>
              <Tooltip title="Open settings">
                <IconButton size="large" onClick={handleOpenUserMenu}>
                  <SvgIcon >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </SvgIcon>
                </IconButton>
              </Tooltip>
              <SwipeableDrawer
                anchor="right"
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                onOpen={handleOpenUserMenu}
              // onOpen={toggleDrawer(anchor, true)}
              >
                <Box sx={{ width: '250px', padding: '10px' }}>
                  <Box sx={{ display: "flex", position: "absolute", top: "10px", right: "10px" }}>
                    <IconButton>
                      <SvgIcon >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </SvgIcon>
                    </IconButton>
                  </Box>
                  <div className="centerer " style={{ margin: "10px auto" }}>
                    <Typography>Settings</Typography>
                  </div>
                  <Divider textAlign="left" sx={{ marginBottom: "10px" }}>Mode</Divider>
                  <div className="centerer mb1">
                    <ButtonGroup fullWidth variant="outlined" aria-label="Theme Mode change button group">
                      <Button onClick={handleThemeButtonClick} variant={!darkTheme ? "contained" : "outlined"} id='Light'>Light</Button>
                      <Button onClick={handleThemeButtonClick} variant={darkTheme ? "contained" : "outlined"} id='Dark'>Dark</Button>
                    </ButtonGroup>
                  </div>
                  <Divider textAlign="left" sx={{ marginBottom: "10px" }}>Langauge TODO</Divider>
                  <div className="centerer mb1">
                    <ButtonGroup fullWidth orientation="vertical"
                      variant="outlined" aria-label="outlined primary button group">
                      <Button variant="contained">English</Button>
                      <Button>Traditional Chinese</Button>
                    </ButtonGroup>
                  </div>
                </Box>
              </SwipeableDrawer>

              {/* <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Divider textAlign="left">Mode</Divider>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button>Light</Button>
                  <Button>Dark</Button>
                </ButtonGroup>

                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll >
  );
}

function ElevationScroll(props: Props) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    style: {
      ...(trigger ? {
        backdropFilter: 'blur(5px)',
        backgroundImage: "none",
        backgroundColor: 'rgba(255, 255, 255, .15)',
      } : {
        boxShadow: 'none',
        backgroundImage: "none",
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }),
      // transition: 'all 1s',
      // transition: 'background-color 1s',
      transition: 'background-color 1s, box-shadow 1s, backdrop-filter 1s',
      marginLeft: 'calc(100vw - 100%)'
    }
  });
}