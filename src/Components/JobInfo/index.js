import React from 'react';

const index = ({ source, company, job, time, location, applied }) => {
    return (
        <div className='job-list'>
            <div>
                <img
                    src={source}
                    alt="brand-logo"
                    width={40}
                    height={40}
                />
                <div className='brand'>
                    <h3>{company}</h3>
                    <div>
                        <span>{job}</span>
                        <span>{time} <div /> {applied}</span>
                    </div>
                </div>
            </div>
            <span>{location}</span>
        </div>
    )
}

export default index