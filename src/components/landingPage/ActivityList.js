import React from 'react';
import ListView from '../ListView';

const mockData = [
    {
        title: 'John Doe',
        titleSubText: '[Developer]',
        subTitle: 'Interview with Stella',
        line3: '5 mins ago',
        imgSrc: `https://api.multiavatar.com/${Math.floor(Math.random() * 10)}.svg`
    },
    {
        title: 'John Doe',
        titleSubText: '[Developer]',
        subTitle: 'Interview with Stella',
        line3: '5 mins ago',
        imgSrc: `https://api.multiavatar.com/${Math.floor(Math.random() * 10)}.svg`
    },
    {
        title: 'John Doe',
        titleSubText: '[Developer]',
        subTitle: 'Interview with Stella',
        line3: '5 mins ago',
        imgSrc: `https://api.multiavatar.com/${Math.floor(Math.random() * 10)}.svg`
    }
];

function ActivityList() {
    return (
        <div>
            <ListView
                title='Activity'
                hasProfileAvatar={true}
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