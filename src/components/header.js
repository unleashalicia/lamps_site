import React from 'react';
import logo from '../assets/images/lamps_logo.jpg';

const Header = () => {
    const headerStyle = {
        backgroundColor: "black",
        color: "white", 
        position: "relative",
        height: "20vh"
    };

    const imgStyle = {
        width: "100px",
        position: "absolute",
        top: "50%",
        left: "5%",
        transform: "translateY(-50%)"
    }

    const h1Style = {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    }

    return (
        <div style={headerStyle}>
        <img style={imgStyle} src={logo} alt="LAMPS logo"/>
        <h1 style={h1Style}>LAMPS: Los Angeles Medicinal Plant Society</h1>
    </div>
    );
};
            
export default Header;