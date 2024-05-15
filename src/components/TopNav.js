import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import '../assets/styles/TopNav.css';
import logo from '../assets/images/logo.png';
import dayMode from '../assets/icons/theme.png';
import notifications from '../assets/icons/notifications.png';
import settings from '../assets/icons/settings.png';
import chat from '../assets/icons/chat.png';

function TopNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" className='top-nav'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" className="logo" />
          </Typography>
          <div className="top-nav-icon-container">
            <img alt='Daymode' src={dayMode} className='top-nav-icons' />
            <img alt='Chat' src={chat} className='top-nav-icons' />
            <img alt='Notifications' src={notifications} className='top-nav-icons' />
            <img alt='Settings' src={settings} className='top-nav-icons' />
            <Avatar alt="User" className='top-nav-avatar' />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopNav;