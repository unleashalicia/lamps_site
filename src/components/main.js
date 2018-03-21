import React from 'react';
import Intro from './intro'
import '../assets/css/style.css';

const Main = props => {
    const mainStyle = {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#385149"
    };

    return (
        <div style={mainStyle}>
            <Intro/>

        </div>
    )
};

export default Main;