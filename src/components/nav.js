import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/nav.css'

const Nav = props => {
    return (
        <div className="nav">
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/Contact">Contact</Link></li> */}
                <li><a href="#about">About</a></li>
               <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav;