import React, {Component} from 'react';
import Section from './section';
import BackgroundImage from './background_image';
import Hero from './hero';
import '../assets/css/style.css';
import passionFlower from '../assets/images/passionflower.jpg';
import forestMan from '../assets/images/forestface.jpeg';
import leaf from '../assets/images/leaf.jpg';
import liftSky from'../assets/images/flammarion.jpg';
import mushrooms from '../assets/images/mushrooms.jpg';
import ayahuasca from '../assets/images/aya.JPG';
import lotus from '../assets/images/pinklotus.jpg';




class Home extends Component {
    constructor(props) {
        super(props);

        this.homeStyle = {
            width: "100vw",
            backgroundColor: "#385149",
            position: "relative"
        };

    }

    render(){
        return (
            <div style={this.homeStyle}>
                <Hero image={liftSky} alt={"man lifting sky to look at cosmos"}/>
                <Section h1={"Section"}/>
                <BackgroundImage image={ayahuasca} alt={"ayahuasca in a pot"}/>
                <Section h1={"Section"}/>
                <BackgroundImage image={passionFlower} alt={"passion flower"}/>
                <Section h1={"Section"}/>
                <BackgroundImage image={mushrooms} alt={"mushrooms"}/>
                <Section h1={"Section"}/>
                <BackgroundImage image={lotus} alt={"pink lotus"}/>
                <Section h1={"Section"}/>
                <BackgroundImage image={leaf} alt={"leaf"}/>
            </div>
        )
    }
};

export default Home;