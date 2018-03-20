import React from 'react';
import Intro from './intro'

const Main = props => {
    const mainStyle = {
      width: "100vw",
      height: "80vh",
      backgroundColor: "#C1C1BA"
    };

    return (
        <div style={mainStyle}>
            <Intro/>
        </div>
    )
};

export default Main;