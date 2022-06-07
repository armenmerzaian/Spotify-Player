import {NavLink} from 'react-router-dom';
import Button from './Button';
import loginButton from '../util/loginButton';


function Navbar() {
  return (
    <div className="w-full h-16 shadow-md bg-gray-900">
      <nav className="flex items-center container mx-auto h-full justify-around">
        <h1 id="navbar-brand" className="font-semibold text-md md:text-2xl text-gray-200">
          Spotify Player
        </h1>
          <ul id="navbar-links" className="flex items-baseline justify-between text-sm gap-5">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-gray-100" : "text-gray-400 focus:hover:text-gray-100"}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-gray-100" : "text-gray-400 focus:hover:text-gray-100"}>About the Project</NavLink></li>
          </ul>
        <div id="navbar-cta">
          <Button to={loginButton()}>Login</Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;