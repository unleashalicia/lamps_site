import React, {Component} from 'react';

import Section from './section';
import BackgroundImage from './background_image';
import Hero from './hero';

import '../assets/css/home.css';

import passionFlower from '../assets/images/passionflower.jpg';
import leaf from '../assets/images/leaf.jpg';
import liftSky from'../assets/images/flammarion.jpg';
import mushrooms from '../assets/images/mushrooms.jpg';
import ayahuasca from '../assets/images/aya.JPG';
import lotus from '../assets/images/pinklotus.jpg';

import content from '../helpers/content'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { about } = content.home
        return (
            <div className="home">
                <Hero image={liftSky} alt={"man lifting sky to look at cosmos"}/>
                <Section 
                    heading="About" 
                    content={about.description} 
                    image={passionFlower} 
                    alt="passion flower"
                    imgSide="left"
                />
                <BackgroundImage image={ayahuasca} alt={"ayahuasca in a pot"}/>
                {/* <Section heading={"Section"}/>
                <BackgroundImage image={passionFlower} alt={"passion flower"}/>
                <Section heading={"Section"}/>
                <BackgroundImage image={mushrooms} alt={"mushrooms"}/>
                <Section heading={"Section"}/>
                <BackgroundImage image={lotus} alt={"pink lotus"}/>
                <Section heading={"Section"}/>
                <BackgroundImage image={leaf} alt={"leaf"}/> */}
            </div>
        )
    }
};

export default Home;