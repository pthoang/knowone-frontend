import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './features/Home';
import NavBar from './features/NavBar';
import Quiz from './features/Quiz';
import useGetUser from './hooks/useGetUser'


function App() {
  const [user] = useGetUser();
 
  return (
    <div className='App'>
      <NavBar />
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={user ? <Home /> : <Quiz />} />
              <Route path='quiz' element={<Quiz />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;