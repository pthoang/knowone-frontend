import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from 'features/Home';
import NavBar from 'components/NavBar';
import Quiz2 from 'features/Quiz2';
import ExploreJobs from 'features/ExploreJobs';
import useGetUser from 'hooks/useGetUser'



function App() {
  const [user] = useGetUser();
 
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/'>
              <Route index element={user ? <Home /> : <Quiz2 />} />
              <Route path='quiz' element={<Quiz2 />} />
              <Route path='explore-jobs' element={<ExploreJobs />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;