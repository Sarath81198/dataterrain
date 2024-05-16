import React from 'react';
import './../assets/styles/ListView.css';
import Button from '@mui/material/Button';

function ListView({
    title = '',
    isTimeEvent = false,
    hasProfileAvatar = true,
    hasActionButton,
    hasSubTitleSubTextHighlight,
    hasTitleSubTextHighlight,
    actionButtonProps,
    date,
    time,
    list,
}) {
    return (
        <div className="list-view-container">
            <div className="list-view-header">
                <div className='list-view-title'>
                    {title}
                </div>
                <div className='list-view-view-all'>
                    View All
                </div>
            </div>
            {
                list.map(data => (
                    <div className="list-view-row">
                        <div className="list-view-column asset-space">
                            {
                                hasProfileAvatar && !isTimeEvent &&
                                <img src={data.imgSrc} alt='img' className='list-view-avatar' />
                            }
                            {
                                isTimeEvent && !hasProfileAvatar &&
                                <div></div>
                            }
                        </div>
                        <div className="list-view-column info-space">
                            <div className='list-view-data-title'>
                                {data.title} &nbsp;
                                {
                                    hasTitleSubTextHighlight &&
                                    <div className='title-sub-text-highlight'>
                                        {data.titleSubText}
                                    </div>
                                }
                            </div>
                            <div className="list-view-sub-title">
                                {data.subTitle}
                            </div>
                            <div className="list-view-line3">
                                {data.line3}
                            </div>
                        </div>
                        <div className="list-view-column action-space">
                            {
                                hasActionButton ? <Button {...actionButtonProps}>{actionButtonProps.value}</Button> : null
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ListView;