
import React, { useState } from 'react';
import './nav.css';
import logo from './logo1.png';

function NavBar() {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggleClick = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav
            style={{
                backgroundColor: darkMode ? '#333' : '#f5f5f5',
                color: darkMode ? '#fff' : '#333',
            }}
        >
            <ul style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <li>
                    <a href="_"><img src={logo} alt="Logo" /></a>
                </li>
                <li>
                    <a href="_">Home</a>
                </li>
                <li>
                    <a href="_">About</a>
                </li>
                <li>
                    <a href="_">Contact</a>
                </li>
            </ul>
            <div className="toggle-wrapper">
                <span
                    className="material-symbols-outlined"
                    style={{ color: darkMode ? '#fff' : '#333' }}
                >
                    dark_mode
                </span>
                <label className="switch">
                    <input type="checkbox" checked={darkMode} onChange={handleToggleClick} />
                    <span className="slider round"></span>
                </label>
            </div>
        </nav>
    );
}

export default NavBar;



