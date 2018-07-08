import React, {Component} from 'react';
import content from '../helpers/content';
import logo from '../assets/images/lamps_transparent_logo.png';
import '../assets/css/hero.css';

class Hero extends Component {
    constructor(props){
        super(props);


    }

    render(){
        const { header, subheader } = content.home.hero
        return (
            <div className="hero">
                <img className="logo" src={logo} alt="lamps logo"/>
            </div>
        );
    }
}

export default Hero;