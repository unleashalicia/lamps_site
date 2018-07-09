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
                <Hero />
                <BackgroundImage image={liftSky} alt="looking beyond cosmos" />
                <div className="sectionContainer row" id="about" >
                    <Section 
                        heading={about.who.heading}
                        content={about.who.description} 
                        image={mushrooms} 
                        alt="mushrooms"
                    />
                    <Section 
                        heading={about.what.heading}
                        content={about.what.description} 
                        image={ayahuasca} 
                        alt="ayahuasca in pot"
                    />
                </div>
                <BackgroundImage image={leaf} alt="leaf" />
                    <VideoSection />
                <div className="row contactContainer">>
                    <div className="contactContent" id="contact">
                        {contactInfo}
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;