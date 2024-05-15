import React from 'react';
import '../../assets/styles/LandingPage.css';
import Head from '../landingPage/Head';
import ApplicationInfo from '../landingPage/ApplicationInfo';

function LandingPage() {
  return (
    <div className='container'>
      <Head />
      <div className='content2-container'>
        <ApplicationInfo />
      </div>
    </div>
  );
}

export default LandingPage;