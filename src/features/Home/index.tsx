import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
    return (
      <>
      <h1>Velkommen til KnowOne</h1>
      <HomeImg
        src="https://knowone.no/assets/images/home/alonetime.svg"
        alt="knowone-home"
      />
      <ButtonContainer>
        <Button component={Link} to='/quiz' color='primary' size='large'>
          Oppdag deg selv
        </Button>
        {/* <Button component={Link} to='/explore-jobs' color='primary' size='large'>
          Oppdag et yrke
        </Button> */}
      </ButtonContainer>
      </>    
    )
  }


const ButtonContainer = styled('div')({
  display: 'flex',
  justifySelf: 'center',
  justifyContent: "space-around",
  gap: '1rem',
  marginTop: '4rem'
})

const HomeImg = styled('img')({
  maxWidth: '600px',
  width: '80%',
})

  
export default Home;