import React from 'react';
import google from '../../images/google.png';

const index = () => {
    return (
        <div className='google'>
            <div className='google-wrap'>
                <div>
                    <img
                        src={google}
                        alt="google-logo"
                        width={40}
                        height={40}
                    />
                    <div className='google-job'>
                        <h4>Google</h4>
                        <div>
                            <span>UX Design Lead, Next Billion Users</span>
                            <span>3 days ago <div /> 6 applied</span>
                        </div>
                    </div>
                </div>
                <span className='google-location'>Singapore</span>
            </div>
            <div className='border' />
            <div className='other-position'>
                <span>Other positions at Google</span>
                <span>View all</span>
            </div>
            <div className='border' />
            <div className='job-options'>
                <div className='container'>
                    <div className='row
                                    justify-content-xl-around 
                                    justify-content-lg-around
                                    justify-content-md-around
                                    justify-content-sm-around
                                    gx-xxl-1 gx-xl-1 gy-lg-3 gy-md-3 gy-sm-3'>
                        <div className='col-sm-7 col-md-7 col-lg-7 col-xl-5 col-xxl-4 jobs'>
                            <h6>Visual Designer, G...</h6>
                            <span>Singapore</span>
                        </div>
                        <div className='col-sm-7 col-md-7 col-lg-7 col-xl-5 col-xxl-4 jobs'>
                            <h6>Interaction Designer</h6>
                            <span>Boulder, CO, USA</span>
                        </div>
                        <div className='col-sm-7 col-md-7 col-lg-7 col-xl-5 col-xxl-4 jobs'>
                            <h6>Interaction Designer</h6>
                            <span>London</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index