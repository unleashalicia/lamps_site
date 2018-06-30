import React, {Component} from 'react';

import Section from './section';
import BackgroundImage from './background_image';
import Hero from './hero';
import VideoSection from './videoSection'

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
        const { contact } = content
        const contactInfo = contact.organizers.map((item, index) => {
            return (
                <div key={index}>
                    <div>{`Name: ${item.name}`}</div>
                    <div>{`Title: ${item.title}`}</div>
                    <div>{`Email: ${item.email}`}</div>
                </div>
            )
        })
        return (
            <div className="home">
                <Hero image={liftSky} alt={"man lifting sky to look at cosmos"}/>
                <div className="sectionContainer row">
                    <Section 
                        heading={about.who.heading}
                        content={about.who.description} 
                        image={passionFlower} 
                        alt="passion flower"
                    />
                    <Section 
                        heading={about.what.heading}
                        content={about.what.description} 
                        image={lotus} 
                        alt="pink lotus"
                    />
                </div>
                <BackgroundImage image={leaf} alt="leaf" />
                    <VideoSection />
                {/* <BackgroundImage image={ayahuasca} alt="ayahuasca in a pot"/> */}
                <div className="row contactContainer">>
                    <div className="contactContent">
                        {contactInfo}
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;