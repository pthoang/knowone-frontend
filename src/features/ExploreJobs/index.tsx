import { Button } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import useGetJobs from './hooks/useGetJobs';
import JobCard from './JobCard';
import { Link } from 'react-router-dom';

import CheckIcon from '@mui/icons-material/Check'
import RemoveIcon from '@mui/icons-material/Remove'
import HomeIcon from '@mui/icons-material/Home'


const ExploreJobs = () => {
  const {jobs, fetchJobs} = useGetJobs();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const acceptJob = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const rejectJob = () => {
    setCurrentIndex(currentIndex + 1)
  }

  const fetchMoreJobs = () => {
    fetchJobs();
    setCurrentIndex(0);
  }

  const currentJob = jobs[currentIndex];

  return (
    <>
      {currentIndex < jobs.length ?
        <>
          {currentJob && 
          <JobCard key={currentJob['xt/id']} {...currentJob} />}
          <ExploreJobsButtonContainer>
            <RoundButton onClick={rejectJob} variant='outlined' color='warning' size='large' >
              <RemoveIcon />
            </RoundButton>
            <RoundButton onClick={acceptJob} variant='outlined' color='success' size='large' >
              <CheckIcon />
            </RoundButton>
          </ExploreJobsButtonContainer>
        </>
        :
        <NavigationButtonContainer>
          <Button startIcon={<HomeIcon />} component={Link} to='/' variant='contained' color='primary'>
            Hjem
          </Button>
          <Button component={Link} to='/quiz' color='primary' >
            Oppdag deg selv
          </Button>
          <Button color='primary' onClick={fetchMoreJobs}>
            Oppdag flere yrker
          </Button>
        </ NavigationButtonContainer>
      }
    </>
  )
}

const NavigationButtonContainer = styled('div')({
  display: 'flex',
  columnGap: '2rem',
  justifyContent: 'center'
})

const ExploreJobsButtonContainer = styled('div')({
  display: 'flex',
  width: '100%',
  maxWidth: 400,
  marginTop: '2rem',
  justifyContent: 'space-between'
})

const RoundButton = styled(Button)(({ theme, ...props }) => ({
  borderRadius: '100%',
  width: 70,
  height: 70,
  "&:hover": {
    backgroundColor: theme.palette[props.color ? props.color : "white"].main,
    color: theme.palette.white.main
  }
}))

export default ExploreJobs;