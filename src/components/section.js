import React, {Component} from 'react';

class Section extends Component {
    constructor(props){
        super(props);

        this.sectionStyle = {
            width: "100vw",
            height: "80vh",
            color: "black",
            backgroundColor: "#191919",
            position: "relative"
        };

        this.h1style = {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#62B28B",
            textShadow: "5px 5px 5px black",
            marginTop: "1%"
        };

        this.divStyle = {
            backgroundColor: "white",
            width: "90%",
            height: "80%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid black"
        }
    }

    render(){
        return (
            <div style={this.sectionStyle}>
                <h1 style={this.h1style}>{this.props.h1}</h1>
                <div style={this.divStyle}>

                </div>
            </div>
        );
    }
}

export default Section;