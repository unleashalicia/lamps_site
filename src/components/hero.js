import React, {Component} from 'react';
import content from '../helpers/content'
import '../assets/css/hero.css';

class Hero extends Component {
    constructor(props){
        super(props);

        this.imageStyle = {
            backgroundImage: `url(${this.props.image})`
        };

    }

    render(){
        const { header, subheader } = content.home.hero
        return (
            <div className="hero" style={this.imageStyle}>
                <h1>{header}</h1>
            </div>
        );
    }
}

export default Hero;