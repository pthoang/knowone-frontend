import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import LandingPage from './features/LandingPage';
import NavBar from './features/NavBar';
import Quiz from './features/Quiz';

import Button from '@mui/material/Button';

function App() {
  // const navigate = useNavigate();
  // const handleClick = () => navigate('/quiz');

  const [myBool, setmyBool] = useState(true);

  function toggleBool() {
    setmyBool(!myBool)
  }
 
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        {/* <LandingPage />
         */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter> */}

    {/* <Routes>
      <Route path="/" element={<LandingPage />}>
          <Route index element={<LandingPage />} />
          <Route path="quiz" element={<Quiz />} />
      </Route>
    </Routes>

    <Outlet /> */}
  
      {/* <button><Link to="/">Go to questions</Link></button> */} 

      {/* <button type="button" onClick={handleClick}>
        Goodbye
      </button> */}


        {myBool ? <LandingPage /> : <Quiz /> }

      {myBool ? ( <div>
         <Button variant="contained" onClick={toggleBool}>Quiz</Button>
        </div>) : ( <div>
         {/* <Button variant="contained" onClick={toggleBool}>Back</Button> */}
        </div>)}
      </div>
    </div>
  );
}

export default App;