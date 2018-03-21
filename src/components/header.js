import React from 'react';
import logo from '../assets/images/lamps_transparent_logo.png';


const Header = () => {
    const headerStyle = {
        backgroundColor: "#000000",
        color: "white", 
        position: "fixed",
        height: "20vh",
        width: "100vw",
        zIndex: 5
    };

    const imgStyle = {
        width: "20vw",
        position: "absolute",
        top: "50%",
        left: "1%",
        transform: "translateY(-50%)"
    };

    return (
        <div style={headerStyle}>
            <img style={imgStyle} src={logo} alt="LAMPS logo"/>
        </div>
    );
};
            
export default Header;