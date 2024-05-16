import React from 'react';
import '../../assets/styles/LandingPage.css';
import Head from '../landingPage/Head';
import ApplicationInfo from '../landingPage/ApplicationInfo';
import NewAssesment from '../landingPage/NewAssesment';

function LandingPage() {
  return (
    <div className='container'>
      <Head />
      <div className='section2-container'>
        <ApplicationInfo />
        <NewAssesment />
      </div>
    </div>
  );
}

export default LandingPage;