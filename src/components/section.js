import React, {Component} from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import '../assets/css/section.css';

class Section extends Component {
    constructor(props){
        super(props);

        this.sectionImage = {
            backgroundImage: `url(${this.props.image})`,
            height: "300px",
            backgroundSize: 'cover',
            backgroundRepeat: "no repeat",
            backgroundPosition: "center"
        }
    }

    render(){
        const { heading, content, image, alt, imgSide } = this.props
        const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

        return(
            <div className="section-container col-6">
                <h1>{heading}</h1>
                <div className="section-body">
                    <div  style={this.sectionImage}></div> 
                    <div>
                        <p>{content}</p> 
                    </div>
                </div>
            </div>
        );

    }
}

export default Section;