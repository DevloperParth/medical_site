import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem('loggedIn', false);
    navigate('/')
    window.location.reload();
  }
  return (
    <>
    
    <div className="navbar">
      <ul>
        {isLoggedIn ? <><li>
          <Link to="/dashboard">DashBoard</Link>
        </li>
        <li className='logout'>
          <Link to="/logout" onClick={handleLogout}>Log Out</Link>
        </li>
        </> :
        <><li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className='login_btn'>
          <Link to="/login">Login</Link>
        </li></>}
      </ul>
    </div>
    </>
  );
}
