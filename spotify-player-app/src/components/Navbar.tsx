import {NavLink} from 'react-router-dom';

function Button({to, children}: {to: string, children: string | number}){
  return (
    <a href={to} target="_blank" className="px-6 py-2 bg-slate-100 rounded-full font-semibold">
      {children}
    </a>
  );
}


function Navbar() {
  return (
    <div className="w-full h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 id="navbar-brand" className="font-semibold text-2xl text-gray-200">
          Spotify Player
        </h1>
          <ul id="navbar-links" className="flex items-baseline justify-between text-sm gap-5">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-gray-100" : "text-gray-400 hover:text-gray-100"}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-gray-100" : "text-gray-400 hover:text-gray-100"}>About the Project</NavLink></li>
          </ul>
        <div id="navbar-cta">
          <Button to="http://www.google.com">Login</Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;