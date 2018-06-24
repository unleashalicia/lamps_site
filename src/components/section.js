import React, {Component} from 'react';
import '../assets/css/section.css';

class Section extends Component {
    constructor(props){
        super(props);

        this.sectionImage = {
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: "no repeat"
        }
    }

    render(){
        const { heading, content, image, alt, imgSide } = this.props
        return (
            <div className="section-container">
                <h1>{heading}</h1>
                { imgSide === "left" && 
                    <div className="section-body">
                        <div className="imageDiv" style={this.sectionImage}></div> 
                        <div className="contentDiv">
                            <p>{content}</p> 
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Section;