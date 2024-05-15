import React from 'react';
import '../../assets/styles/Head.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Head() {
  return (
    <div className='head-container'>
      <div>
        <Typography variant="h4" sx={{ pb: 2 }}>HR Employee</Typography>
        <Typography variant="body">
          Enjoy your selecting potential candidates Tracking and Management System.
        </Typography>
      </div>
      <div>
        <Button variant="contained" className="task-details-btn">Task Details</Button>
      </div>
    </div>
  );
}

export default Head;