import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to = '/about' className = {(nav) => (nav.isActive ? "nav-active" : "")} >
                    <li>A Propos</li>
                </NavLink>                
            </ul>
            <Logo />
        </div>
    );
};

export default Navigation;