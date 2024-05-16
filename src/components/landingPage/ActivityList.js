import React from 'react';
import ListView from '../ListView';

const mockData = [
    {
        title: 'John Doe',
        titleSubText: '[Developer]',
        subTitle: 'Interview with Stella',
        line3: '5 mins ago',
        imgSrc: 'https://avatar.iran.liara.run/public/boy'
    },
    {
        title: 'John Doe',
        titleSubText: '[Developer]',
        subTitle: 'Interview with Stella',
        line3: '5 mins ago',
        imgSrc: 'https://avatar.iran.liara.run/public/boy'
    },
    {
        title: 'John Doe',
        titleSubText: '[Developer]',
        subTitle: 'Interview with Stella',
        line3: '5 mins ago',
        imgSrc: 'https://avatar.iran.liara.run/public/boy'
    }
];

function ActivityList() {
    return (
        <div>
            <ListView
                title='Activity'
                hasProfileAvatar={true}
                hasActionButton={true}
                hasTitleSubTextHighlight={true}
                actionButtonProps={{
                    variant: 'contained',
                    value: 'Details'
                }}
                list={mockData}
            />
        </div>
    );
}

export default ActivityList;