import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import logo from '../assets/images/lamps_transparent_logo.png';

import '../assets/css/header.css'



class Header extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="header">
                <img className="logo" src={logo} alt="LAMPS logo"/>
                <div className="navContainer">
                    <Nav />
                </div>
            </div>
        );
    }
};
            
export default Header;