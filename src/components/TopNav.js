import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './styles/TopNav.css'

function TopNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" className='top-nav'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Avatar>N</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopNav;