import React, {Component} from 'react';
import content from '../helpers/content'
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
        const { header, subheader } = content.home.hero
        return (
            <div style={this.imageStyle}>
                <div className="hero-text">
                    <h1>{header}</h1>
                </div>
            </div>
        );
    }
}

export default Hero;