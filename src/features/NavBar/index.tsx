import './style.css';
import Button from '@mui/material/Button';
import { Navigate } from 'react-router-dom';

const NavBar = () => {
    const handleClick = () => {
    //   <Navigate to="/" replace={true} />
         window.location.reload();
    }

    return (
        <nav className="navbar">
            <h1><img src="https://knowone.no/assets/icons/KnowONElogo.png"></img></h1>
            <div className="links ">
                <Button variant="outlined" onClick={handleClick}>Home</Button>
                {/* <a href="/quiz">Quiz </a> */}
            </div>
        </nav>
     );
}
 
export default NavBar;