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
      <h1>Wanna play a game?</h1>
      <ButtonContainer>
        <Button component={Link} to='/quiz' color='primary' size='large'>
          Oppdag deg selv
        </Button>
        <Button color='primary' size='large'>
          Oppdag en jobb
        </Button>
      </ButtonContainer>
      </>    
    )
  }


const ButtonContainer = styled('div')({
  display: 'flex',
  justifySelf: 'center',
  justifyContent: "space-around",
  gap: '1rem'
})

const HomeImg = styled('img')({
  maxWidth: '600px',
  width: '80%',
})

  
export default Home;