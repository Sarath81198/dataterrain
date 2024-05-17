import React from 'react';
import ListView from '../ListView';

const mockData = [
    {
        title: 'John Doe',
        subTitle: 'Senior Developer',
        line3: 'Hired by Stella',
        imgSrc: `https://api.multiavatar.com/${Math.floor(Math.random() * 10)}.svg`

    },
    {
        title: 'John Doe',
        subTitle: 'Senior Developer',
        line3: 'Hired by Stella',
        imgSrc: `https://api.multiavatar.com/${Math.floor(Math.random() * 10)}.svg`

    },
    {
        title: 'John Doe',
        subTitle: 'Senior Developer',
        line3: 'Hired by Stella',
        imgSrc: `https://api.multiavatar.com/${Math.floor(Math.random() * 10)}.svg`

    },
    {
        title: 'John Doe',
        subTitle: 'Senior Developer',
        line3: 'Hired by Stella',
        imgSrc: `https://api.multiavatar.com/${Math.floor(Math.random() * 10)}.svg`

    }
];

function HiringList() {
    return (
        <div>
            <ListView
                title='Hiring Candidate'
                hasProfileAvatar={true}
                hasActionButton={true}
                list={mockData}
                hasActionButton={true}
                actionButtonProps={{
                    variant: 'outlined',
                    value: 'Details'
                }}
            />
        </div>
    );
}

export default HiringList;