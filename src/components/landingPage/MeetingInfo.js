import React from 'react';
import MeetingInfoCard from './MeetingInfoCard';
import '../../assets/styles/MeetingInfo.css'

const mockData = [
    {
        name: 'John Smith',
        position: 'Senior Software Developer',
        interviewDate: '19th Feb 2024',
        interviewTime: '10:00 AM',
        level1: '7/10',
        level2: '6/10',
        level3: 'Waiting',
        meetingVia: 'G-Meet',
        l1Interviewer: 'Stella',
        l2Interviewer: 'Smith',
        l3Interviewer: 'Stephan',
        attendees: 'Johnson',
        img: `https://api.multiavatar.com/${Math.floor(Math.random() * 10)}.svg`

    },
    {
        name: 'Tina',
        position: 'Senior Software Developer',
        interviewDate: '20th Feb 2024',
        interviewTime: '10:00 AM',
        level1: '7/10',
        level2: '6/10',
        level3: 'Waiting',
        meetingVia: 'G-Meet',
        l1Interviewer: 'Stella',
        l2Interviewer: 'Smith',
        l3Interviewer: 'Stephan',
        attendees: 'Johnson',
        img: `https://api.multiavatar.com/${Math.floor(Math.random() * 10)}.svg`

    }
];
function MeetingInfo() {
    return (
        <div className='meeting-info'>
            {
                mockData.map(interviewee =>
                    <div>
                        <MeetingInfoCard interviewee={interviewee} />
                    </div>
                )
            }

        </div>
    );
}

export default MeetingInfo;