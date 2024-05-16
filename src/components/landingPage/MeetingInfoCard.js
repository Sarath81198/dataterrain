import React from 'react';
import '../../assets/styles/MeetingInfoCard.css';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DateIcon from '../../assets/icons/calendar.png';
import TimeIcon from '../../assets/icons/time.png';

function MeetingInfoCard({ interviewee }) {
    return (
        <div className='meeting-info-card-container'>
            <div className='meeting-card-section1'>
                <div className='meeting-card-avatar-section'>
                    <div className='meeting-card-avatar'>
                        <img src={interviewee.img} alt={interviewee.name} className='candidate-img' />
                    </div>
                    <div className='meeting-info-candidate-name'>
                        {interviewee.name}
                    </div>
                    <div className='meeting-info-candidate-position'>
                        {interviewee.position}
                    </div>
                </div>
                <Divider />
                <div className='meeting-info-time-section'>
                    <div className='meeting-info-icons meeting-info-date-icon'>
                        <img src={DateIcon} alt='date' className='meeting-info-icon' />
                        <div className="meeting-info-schedule-text">
                            {interviewee.interviewDate}
                        </div>
                    </div>
                    <Divider orientation='vertical' />
                    <div className='meeting-info-icons meeting-info-time-icon'>
                        <img src={TimeIcon} alt='time' className='meeting-info-icon' />
                        <div className="meeting-info-schedule-text">
                            {interviewee.interviewTime}
                        </div>
                    </div>
                </div>
            </div>
            <Divider orientation='vertical' />
            <div className='meeting-card-section2'>
                <div className='meeting-info-container'>
                    <div className='meeting-info-table'>
                        <div className='meeting-info-row'>
                            <div className='meeting-info-column'>
                                1st Level:    {interviewee.level1}
                            </div>
                            <Divider orientation='vertical' />
                            <div className='meeting-info-column'>
                                Interviewer:    {interviewee.l1Interviewer}
                            </div>
                        </div>
                        <Divider />

                        <div className='meeting-info-row'>
                            <div className='meeting-info-column'>
                                2nd Level:    {interviewee.level2}
                            </div>
                            <Divider orientation='vertical' />
                            <div className='meeting-info-column'>
                                Interviewer:    {interviewee.l2Interviewer}
                            </div>
                        </div>
                        <Divider />

                        <div className='meeting-info-row'>
                            <div className='meeting-info-column'>
                                3rd Level:    {interviewee.level3}
                            </div>
                            <Divider orientation='vertical' />
                            <div className='meeting-info-column'>
                                Interviewer:    {interviewee.l3Interviewer}
                            </div>
                        </div>
                        <Divider />

                        <div className='meeting-info-row'>
                            <div className='meeting-info-column'>
                                Meet Via:    {interviewee.meetingVia}
                            </div>
                            <Divider orientation='vertical' />
                            <div className='meeting-info-column'>
                                Attendees:    {interviewee.attendees}
                            </div>
                        </div>

                    </div>

                </div>
                <Divider />
                <div className='meeting-info-card-schedule-btns'>
                    <Button variant='outlined'>Reschedule Meeting</Button>
                    <Button variant='contained'>Join Meeting</Button>
                </div>
            </div>
        </div>
    );
}

export default MeetingInfoCard;