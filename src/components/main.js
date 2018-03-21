import React, {Component} from 'react';
import Section from './section';
import BackgroundImage from './background_image';
import '../assets/css/style.css';
import passionFlower from '../assets/images/passionflower.jpg';



class Main extends Component {
    constructor(props) {
        super(props);

        this.mainStyle = {
            width: "100vw",
            height: "4000px",
            backgroundColor: "#385149",
            position: "relative",
            top: "20vh"
        };

    }

    render(){
        return (
            <div style={this.mainStyle}>
                <Section h1={"Welcome to LAMPS!"}/>
                <BackgroundImage image={passionFlower} alt={"passion flower"}/>
                <Section h1={"I'm a Section!"}/>
                <BackgroundImage image={passionFlower} alt={"passion flower"}/>
                <Section h1={"Me too!"}/>
            </div>
        )
    }
};

export default Main;