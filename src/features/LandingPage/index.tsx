import { useState } from "react";
import './style.css';

export default function LandingPage() {
    const [number, setCount] =  useState(0); 

    // const handleClick = () => {
    //   console.log('eh')
    //   setCount(number+1);
    //   <Link to="/quiz">Quiz</Link>
    // }

    // const handleReturn = (test: string) => {
    //   console.log('return' + test);
    // }

    return (
      <>
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
      <h1>Wanna play a game?</h1>
{/* 
      <button onClick={handleClick}>Go to quiz</button>
      <button onClick={() =>  handleReturn('TestReturn')}>Test reset</button>
      {number} */}
      </>    
    )
  }
  