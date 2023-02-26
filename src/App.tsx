import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './features/Home';
import NavBar from './components/NavBar';
import Quiz from './features/Quiz';
import useGetUser from './hooks/useGetUser'



function App() {
  const [user] = useGetUser();
 
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path='/'>
              <Route index element={user ? <Home /> : <Quiz />} />
              <Route path='quiz' element={<Quiz />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;