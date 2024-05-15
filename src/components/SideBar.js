import React from 'react';
import '../assets/styles/SideBar.css';
import icon1 from '../assets/icons/1.png';
import icon2 from '../assets/icons/2.png';
import icon3 from '../assets/icons/3.png';
import icon4 from '../assets/icons/4.png';
import icon5 from '../assets/icons/5.png';
import icon6 from '../assets/icons/6.png';
import icon7 from '../assets/icons/7.png';
import icon8 from '../assets/icons/8.png';
import icon9 from '../assets/icons/9.png';

function SideBar() {
    return (
        <div className='sidebar-container'>
            <img alt='1' src={icon1} className='sidebar-icon' />
            <img alt='2' src={icon2} className='sidebar-icon' />
            <img alt='3' src={icon3} className='sidebar-icon' />
            <img alt='4' src={icon4} className='sidebar-icon' />
            <img alt='5' src={icon5} className='sidebar-icon' />
            <img alt='6' src={icon6} className='sidebar-icon' />
            <img alt='7' src={icon7} className='sidebar-icon' />
            <img alt='8' src={icon8} className='sidebar-icon' />
            <img alt='9' src={icon9} className='sidebar-icon' />
        </div>
    );
}

export default SideBar;