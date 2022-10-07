import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Index = ({ open, setOpen, size }) => {
    const [isDisabled, setIsDisplayed] = useState(false)
    
    // if window width is both equal and greater than 1200px , it will make disable the button thanks to useState. 
    useEffect(() => {
        size.width >= 1200 ? setIsDisplayed(true) : setIsDisplayed(false)
    }, [size.width]);

    return (
        <div className='sidebar mw-100'>
            {open && <div className='sidebar-div'>
                <div>
                    <button disabled={isDisabled} onClick={() => setOpen(!open)}>
                        <FontAwesomeIcon icon={solid('bars')} className='bars' />
                    </button>
                    <ul>
                        <li>
                            <a href="#">Browse</a>
                        </li>
                        <li>
                            <a href="#">Your Profile</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                        <li>
                            <a href="#">Jobs
                                <span>Now Hiring</span>
                                <span>Saved Jobs(8)</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">More</a>
                        </li>
                    </ul>
                </div>
                <button>Log Out</button>
            </div>}
        </div>
    )
}

export default Index