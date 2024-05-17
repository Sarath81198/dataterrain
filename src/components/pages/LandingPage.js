import React from 'react';
import dayjs from 'dayjs';
import '../../assets/styles/LandingPage.css';
import Head from '../landingPage/Head';
import ApplicationInfo from '../landingPage/ApplicationInfo';
import NewAssesment from '../landingPage/NewAssesment';
import TodaysInfo from '../landingPage/TodaysInfo';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ActivityList from '../landingPage/ActivityList';
import HiringList from '../landingPage/HiringList';
import UpcomingsList from '../landingPage/UpcomingsList';
import PostedJobs from '../landingPage/PostedJobs';
import CandidateStatus from '../landingPage/CandidateStatus';

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
          <PostedJobs />
          <CandidateStatus />
        </div>
        <div className='right-section'>
          <div className='date-picker'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateRangePicker
                defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                sx={{
                  [`.${pickersLayoutClasses.contentWrapper}`]: {
                    alignItems: 'center',
                  },
                }}
              />
            </LocalizationProvider>
          </div>
          <div className='activity-list'>
            <UpcomingsList />
            <ActivityList />
            <HiringList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;