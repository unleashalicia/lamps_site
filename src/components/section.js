import React, {Component} from 'react';

class Section extends Component {
    constructor(props){
        super(props);

        this.introStyle = {
            width: "100vw",
            height: "300px",
            color: "black",
            backgroundColor: "#C1C1BA",
            position: "relative"
        };

        this.h1style = {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)"
        };
    }

    render(){
        return (
            <div style={this.introStyle}>
                <h1 style={this.h1style}>{this.props.h1}</h1>
            </div>
        );
    }
}

export default Section;