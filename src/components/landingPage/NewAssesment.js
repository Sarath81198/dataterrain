import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import officeAnimator from '../../assets/images/office-animator.png';
import '../../assets/styles/NewAssesment.css';
import noteIcon from '../../assets/icons/note.png';

function NewAssesment() {
    return (
        <div className='new-assesment-section'>
            <div className='new-assesment-container'>
                <div className="assesment-icon-container">
                    <img src={noteIcon} alt='noteIcon' className='assesment-icon' />
                </div>
                <b className='assesment-count'>0033</b>
                <text className='assesment-count-label'>New Assessment's</text>
            </div>
            <img src={officeAnimator} alt='Animator Face' className='animeFace' />
            <Button variant='contained'
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    position: 'absolute',
                    right: '120px',
                    top: '650px'
                }}>View Details</Button>
        </div>
    );
}

export default NewAssesment;