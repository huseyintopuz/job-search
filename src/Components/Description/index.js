import React from 'react';
import google from '../../images/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const index = () => {
    return (
        <div className='description'>
            <div className='apply'>
                <img
                    src={google}
                    alt="google-logo"
                    width={60}
                    height={60}
                />
                <h3>UX Design Lead</h3>
                <h3>Next Billion Users</h3>
                <span className='place'>Google, Singapore</span>
                <div>
                    <FontAwesomeIcon icon={solid('bookmark')} className='bookmark' />
                    <span>Saved</span>
                </div>
                <button>Apply</button>
            </div>
            <div className='border-description' />
            <div className='qualifications'>
                <h6>Minimum Qualifications:</h6>
                <ul>
                    <li>
                        <p>BA/BS degree in Design (e.g., interaction,
                            graphic, visual communications. product, industrial), HCI, CS, or a related field or equivalent practical experience.
                        </p>
                    </li>
                    <li>
                        <p>
                            5 years of experience in a related field.
                        </p>
                    </li>
                    <li>
                        <p>
                            Experience implementing visual design systems accros a range of platforms in an iterative software development environment.
                        </p>
                    </li>
                    <li>
                        <p>
                            Experience collaborating with multidisciplinary UX and/or product teams (motion, interaction, UX research, engineering, UX writer) on technical implementation.
                        </p>
                    </li>
                </ul>
                <span>Read More</span>
            </div>
            <div className='border-description' />
            <div className='about-company'>
                <h5>About the Company</h5>
                <h6>Glassdoor</h6>
                <div>
                    <FontAwesomeIcon icon={solid('star')} className='star' />
                    <FontAwesomeIcon icon={solid('star')} className='star' />
                    <FontAwesomeIcon icon={solid('star')} className='star' />
                    <FontAwesomeIcon icon={solid('star')} className='star' />
                    <FontAwesomeIcon icon={solid('star-half-stroke')} className='star' />
                </div>
                <p>4.6 - 8.639 reviews</p>
                <span>Google is not a conventional company and we don't</span>
            </div>
        </div>
    )
}

export default index