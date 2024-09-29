// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Import styles for the menu

const Menu = () => {
    return (
        <div className="menu">
            <h1>Crypto App</h1>
            <nav>
                <ul>
                    <li><Link to="/">Comparisons</Link></li>
                    <li><Link to="/alerts">Alerts</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/watchlist">Watchlist</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
