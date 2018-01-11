import React from 'react'

import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header-container">
            <Link to="/" className="home">Home</Link>
            <Link to="/profile" className="home">Profile</Link>
            <Link to="/about" className="nav-items">About</Link>
            <Link to="/songForm" className="nav-items">Add Song</Link>
        </div>
    )
}

export default Header