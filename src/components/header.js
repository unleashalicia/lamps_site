import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import logo from '../assets/images/lamps_transparent_logo.png';



class Header extends Component {
    constructor(props){
        super(props);

        this.headerStyle = {
            backgroundColor: "#000000",
            color: "white",
            position: "fixed",
            height: "20vh",
            width: "100vw",
            zIndex: 5,
            transition: "1s"
        };


        this.smallHeaderStyle = {
            backgroundColor: "#000000",
            color: "white",
            position: "fixed",
            height: "10vh",
            width: "100vw",
            zIndex: 5
        };

        this.imgStyle = {
            height: "90%",
            position: "absolute",
            top: "50%",
            left: "1%",
            transform: "translateY(-50%)"
        };
    }

    render(){
        return (
            <div style={this.headerStyle}>
                <img style={this.imgStyle} src={logo} alt="LAMPS logo"/>
                <Nav />
                
            </div>
        );
    }
};
            
export default Header;