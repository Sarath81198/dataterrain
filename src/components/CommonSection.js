import React from 'react';
import '../assets/styles/CommonSection.css';
import Paper from '@mui/material/Paper';
import SearchBar from './SearchBar';
import FilterBtn from './FilterBtn';

function CommonSection({ title, bodyComponent }) {
    return (
        <Paper className="common-section-container">
            <div className="common-section-head">
                <div className="common-section-head-left">
                    <div className='common-section-title'>{title}</div>
                    <div className='common-section-view'>View All</div>
                </div>
                <div className="common-section-head-right">
                    <SearchBar width='360px' />
                    <FilterBtn />
                </div>
            </div>
            <div className='common-section-body'>
                {bodyComponent}
            </div>
        </Paper>
    );
}

export default CommonSection;