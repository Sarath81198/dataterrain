import React from 'react';
import ListView from '../ListView';

const mockData = [
    {
        title: 'Interview with Designer',
        subTitle: 'Created by Stella',
        line3: '10 A.M to 11 A.M',
        date: '07',
        month: 'Feb',
        active: true
    },
    {
        title: 'Interview with Designer',
        subTitle: 'Created by Stella',
        line3: '10 A.M to 11 A.M',
        date: '07',
        month: 'Feb',
        active: false,
    },
    {
        title: 'Interview with Designer',
        subTitle: 'Created by Stella',
        line3: '10 A.M to 11 A.M',
        date: '07',
        month: 'Feb',
        active: false,
    },
];

function UpcomingsList() {
    return (
        <div>
            <ListView
                list={mockData}
                title='Upcomings'
                isTimeEvent={true}
                hasActionButton={true}
                actionButtonProps={{
                    variant: 'contained',
                    value: 'Details'
                }}
            />
        </div>
    );
}

export default UpcomingsList;