import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

const Header = () => {
    const location = useLocation()
    return (
        <header>
            <nav className="nav">
                <div className="nav-logo">
                    <span>Kasa</span>
                </div>

                <ul className='nav-items'>
                    <li className='nav-tem'>
                        <Link className={` ${location.pathname === "/" ? "nav-item-active" : ""} nav-item-link`} to="/">Accueil</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className={` ${location.pathname === "/about" ? "nav-item-active" : ""} nav-item-link`} to="/about">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header