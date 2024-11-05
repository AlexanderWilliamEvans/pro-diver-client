import * as React from 'react';
import { shadows } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { ListItemIcon, Stack } from '@mui/material';
import { RiAB, RiAccountCircleFill, RiLogoutBoxRFill, RiSettings4Fill, RiUserSettingsFill } from 'react-icons/ri';
import "./Navbar.scss";
import { ReactComponent as Logo } from '../../../assets/icons/diver.svg';


export function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const signout = () => {

  }

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Stack sx={{padding: "0 24px"}}>
        <Toolbar disableGutters>
          <MenuIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: "40px"}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 0, marginLeft: "95%"}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
               <RiAccountCircleFill className='navbar-menu-icon'/>
              </IconButton>
            </Tooltip>
            <Menu
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
            <Link to="/profile">
            <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <RiUserSettingsFill className="navbar-menu-item-icon" />
                  </ListItemIcon>
                  <Typography textAlign="center" color='primary'>Profile</Typography>
                </MenuItem>
            </Link> 
            <Link to="/settings">
            <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                  <RiSettings4Fill className="navbar-menu-item-icon" />
                  </ListItemIcon>
                  <Typography textAlign="center" color='primary'>Settings</Typography>
                </MenuItem>
            </Link>      
                <MenuItem onClick={signout}>
                  <ListItemIcon>
                    <RiLogoutBoxRFill className="navbar-menu-item-icon" />
                  </ListItemIcon>
                  <Typography textAlign="center" color='primary'>Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Stack>
    </AppBar>
  );
}
