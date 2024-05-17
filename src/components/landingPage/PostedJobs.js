import React from 'react';
import CommonSection from '../CommonSection';
import '../../assets/styles/PostedJobs.css';
import Divider from '@mui/material/Divider';

const mockData = [
    {
        name: 'Python Devloper',
        position: 'Senior Developer',
        applicantsCount: 258,
        percentInc: 28,
        updateAt: '5 min ago',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png'
    },
    {
        name: 'Python Devloper',
        position: 'Senior Developer',
        applicantsCount: 258,
        percentInc: 28,
        updateAt: '5 min ago',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png'
    },
    {
        name: 'Python Devloper',
        position: 'Senior Developer',
        applicantsCount: 258,
        percentInc: 28,
        updateAt: '5 min ago',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png'
    },
    {
        name: 'Python Devloper',
        position: 'Senior Developer',
        applicantsCount: 258,
        percentInc: 28,
        updateAt: '5 min ago',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png'
    }
];
const PostedJobsContent = () => {
    return (
        <div className="posted-jobs-container">
            <div className="posted-jobs-tabs">
                <div className="posted-job-tab">Active Jobs</div>
                <div className="posted-job-tab">Pending Jobs</div>
                <div className="posted-job-tab"></div>
                <div className="posted-job-tab"></div>
            </div>
            <Divider />
            <div className="posted-job-body">
                {
                    mockData.map(job =>
                        <div className="job-card">
                            <div className="job-card-title">
                                <div>
                                    <img src={job.logo} alt='logo' className="job-card-img" />
                                </div>
                                <div className="job-card-name">
                                    {job.name}
                                </div>
                            </div>
                            <Divider />
                            <div className="job-card-body">
                                <div>
                                    {job.position}
                                </div>
                                <div className="job-card-count-container">

                                    <div className="job-card-count">
                                        {job.applicantsCount}
                                    </div>
                                </div>
                                <div>
                                    Total Applicants
                                </div>
                            </div>
                            <Divider />
                            <div className="job-card-footer">
                                <div>
                                    {job.percentInc}% vs Last month
                                </div>
                                <div>
                                    {job.updateAt}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

function PostedJobs() {
    return (
        <div>
            <CommonSection
                title='Posted Jobs'
                bodyComponent={<PostedJobsContent />}
            />
        </div>
    );
}

export default PostedJobs;