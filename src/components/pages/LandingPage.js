import React from 'react';
import '../../assets/styles/LandingPage.css';
import Head from '../landingPage/Head';
import ApplicationInfo from '../landingPage/ApplicationInfo';
import NewAssesment from '../landingPage/NewAssesment';
import TodaysInfo from '../landingPage/TodaysInfo';

function LandingPage() {
  return (
    <div className='container'>
      <Head />
      <div className='section2-container'>
        <ApplicationInfo />
        <NewAssesment />
      </div>
      <div className='section3-container'>
        <div className='left-section'>
          <TodaysInfo />
        </div>
        <div className='right-section'>s</div>
      </div>
    </div>
  );
}

export default LandingPage;