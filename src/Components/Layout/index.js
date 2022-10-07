import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Content from '../Content';
import Description from '../Description';

const Index = () => {

    const [open, setOpen] = useState(true);

    // This hook returns an object containing the window's width. 
    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined
        });

        useEffect(() => {
            const handleResize = () =>
                setWindowSize({ width: window.innerWidth });

            window.addEventListener('resize', handleResize);

            handleResize();

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return windowSize;
    };

    // This helps me to adjust displaying whether none or block for a div with useEffect Hook.
    // if window width is less than 1200px, it will not display the div thanks to useState.  

    useEffect(() => {
        size.width < 1200 ? setOpen(false) : setOpen(true)
    }, [size.width, setOpen]);

    return (
        <div className='layout'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-2 col-xxl-2 mw-100'>
                        <Sidebar open={open} setOpen={setOpen} size={size} />
                    </div>
                    <div className='col-lg-7 col-xl-6 col-xxl-6'>
                        <Content open={open} setOpen={setOpen} size={size} />
                    </div>
                    <div className='col-lg-5 col-xl-4 col-xxl-4'>
                        <Description />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index