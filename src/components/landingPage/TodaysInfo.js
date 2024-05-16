import React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import './../../assets/styles/TodaysInfo.css';
import MeetingInfo from './MeetingInfo';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function TodaysInfo() {
    return (
        <div>
            <Paper className='todays-info-container'>
                <div className='todays-info-head'>
                    <div className='todays-info-title'>
                        Today Interviews Meetings Info
                    </div>
                    <div>
                        <MoreVertIcon />
                    </div>
                </div>
                <Divider sx={{ marginX: '20px' }} />
                <div className='meeting-info-container'>
                    <MeetingInfo />
                </div>
            </Paper>
        </div>
    );
}

export default TodaysInfo;