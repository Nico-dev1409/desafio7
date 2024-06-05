import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import UserList from '../components/UserList';
import "./headerStyle.css"
const Header = () => {
    const [menu, setMenu] = useState(false)
    const handleMenuStatus = () => {
        setMenu(!menu);
    }
return (
    <Router>
    <>
    <header>
        <button onClick={handleMenuStatus} className='button-menu'>{menu ? 
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-x-lg svg-menu ${menu ? "rotate" : ""}`} viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg> 
: 
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-list svg-menu svg-menu ${menu ? "" : "rotate2"}`} viewBox="0 0 16 16">
  <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
}</button>
  
<nav>
<ul className={menu ? "container-menu actived" : "container-menu"}>
<li><Link onClick={handleMenuStatus} className='link-menu' to="/">Home</Link></li>
<li><Link onClick={handleMenuStatus} className='link-menu' to="userList">UserList</Link></li>
</ul>
</nav>

    </header>
<Routes>
<Route path="/" element={<Home />} />
<Route path="userList" element={<UserList />} />
</Routes>
    </>
    </Router>
);
};

export default Header;