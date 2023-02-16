import { useState } from 'react';
import './App.css';
import LandingPage from './features/LandingPage';
import NavBar from './features/NavBar';
import Quiz from './features/Quiz';

import Button from '@mui/material/Button';

function App() {
  const [myBool, setmyBool] = useState(true);

  function toggleBool() {
    setmyBool(!myBool)
  }
 
  return (
    <div className="App">
      <NavBar />
      <div className="content">

        {myBool ? <LandingPage /> : <Quiz /> }

      {myBool ? ( <div>
         <Button variant="contained" onClick={toggleBool}>Quiz</Button>
        </div>) : ( <div>
        </div>)}
      </div>
    </div>
  );
}

export default App;