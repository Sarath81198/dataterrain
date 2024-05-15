import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import '../../assets/styles/ApplicationInfo.css';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value) => `${value}`;

const chartSetting = {
    colors: ['#277ACC'],
    yAxis: [],
    series: [{ dataKey: 'application', valueFormatter }],
    height: 300,
    sx: {
        [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)',
        },
    },
};

const dataset = [
    {
        application: 21,
        month: 'Jan',
    },
    {
        application: 28,
        month: 'Fev',
    },
    {
        application: 41,
        month: 'Mar',
    },
    {
        application: 73,
        month: 'Apr',
    },
    {
        application: 99,
        month: 'May',
    },
    {
        application: 144,
        month: 'June',
    },
    {
        application: 319,
        month: 'July',
    },
    {
        application: 249,
        month: 'Aug',
    },
    {
        application: 131,
        month: 'Sept',
    },
    {
        application: 55,
        month: 'Oct',
    },
    {
        application: 48,
        month: 'Nov',
    },
    {
        application: 25,
        month: 'Dec',
    },
];

function ApplicationInfo() {
    return (
        <Paper sx={{
            minWidth: '968px',
            padding: '10px',
        }}>
            <div className='application-info-header'>
                <Typography variant="h5" sx={{ paddingLeft: '10px' }}>Application's Info</Typography>
                <div className='legend blue'></div>
                <Typography variant="p">Received</Typography>
                <div className='legend dark-blue'></div>
                <Typography variant="p">Processed</Typography>
                <select className='select-dropdown chart-time'>
                    <option>Day</option>
                    <option selected>Month</option>
                    <option>Year</option>
                </select>
            </div>
            <Divider sx={{ marginY: '10px' }} />
            <BarChart
                dataset={dataset}
                xAxis={[
                    { scaleType: 'band', dataKey: 'month', tickPlacement: 'middle', tickLabelPlacement: 'middle' },
                ]}
                {...chartSetting}
            />
        </Paper>
    );
}

export default ApplicationInfo;