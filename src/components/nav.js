import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/nav.css'

const Nav = props => {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><a href="https://www.lapss.org/" target="_blank">LAPSS</a></li>
            </ul>
        </div>
    )
}

export default Nav;