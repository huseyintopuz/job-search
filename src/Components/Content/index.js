import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import airbnb from '../../images/airbnb.jpeg';
import spotify from '../../images/spotify.png';
import ideo from '../../images/ideo.png';
import Switch from '@mui/material/Switch';
import JobInfo from '../JobInfo';
import GoogleJob from '../GoogleJob';

const Index = ({ open, setOpen, size }) => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <div className='content'>
      {!open && <button className='menu' onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={solid('bars')} className='bars' />
      </button>}
      <div className='search-bar'>
        <FontAwesomeIcon icon={solid('location-dot')} className='location' />
        <span>Anywhere</span>
        <div className='vertical' />
        <input type='text' placeholder='Search by Title, Company or Keywords...' />
        <FontAwesomeIcon icon={solid('magnifying-glass')} />
      </div>
      <div className='container'>
        <div className='row design-buttons'>
          <div className='col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11'>
            <div className='row buttons'>
              <button className='col-sm-11 col-md-4 col-lg-4 col-xl-4 col-xxl-3'>UX Design</button>
              <button className='col-sm-11 col-md-7 col-lg-7 col-xl-7 col-xxl-4'>Interaction Design</button>
              <button className='col-sm-11 col-md-7 col-lg-7 col-xl-7 col-xxl-4'>Product Design</button>
            </div>
          </div>
          <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1'>
            <button>
              <FontAwesomeIcon icon={solid('ellipsis')} />
            </button>
          </div>
        </div>
      </div>
      <div className='showing-jobs'>
        <div className='showing'>
          <span>Showing</span>
          <span className='full'>Full-time jobs</span>
        </div>
        <div className='job-alerts'>
          <span>Job Alerts</span>
          <Switch {...label} defaultChecked />
        </div>
      </div>
      <JobInfo
        className='job-list'
        source={airbnb}
        company='Airbnb'
        job='Visual Designer'
        time='3 days ago'
        applied='6 applied'
        location='Beijing, China'
      />
      <GoogleJob />
      <JobInfo
        source={spotify}
        company='Spotify'
        job='Senior Product Designer'
        time='3 days ago'
        applied='6 applied'
        location='New York, USA'
      />
      <JobInfo
        source={ideo}
        company='IDEO'
        job='Visual Designer'
        time='6 days ago'
        applied='8 applied'
        location='London, UK'
      />
    </div>
  )
}

export default Index