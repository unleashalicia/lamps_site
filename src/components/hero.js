import React, {Component} from 'react';
import '../assets/css/hero.css';

class Hero extends Component {
    constructor(props){
        super(props);

        this.imageStyle = {
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${this.props.image})`,
            position: "relative",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        };

    }

    render(){
        return (
            <div style={this.imageStyle}>
                <div className="hero-text">
                    <h1>Welcome to LAMPS: </h1>
                    <h2>The Los Angeles Medicinal Plant Society</h2>
                </div>
            </div>
        );
    }
}

export default Hero;