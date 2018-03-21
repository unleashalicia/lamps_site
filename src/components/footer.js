import React, {Component} from 'react';

class Section extends Component {
    constructor(props){
        super(props);

        this.footerStyle = {
            backgroundColor: "black",
            width: "100vw",
            height: "10vh",
            position: "relative",
            bottom: "0",
            margin: "0"
        }
    }

    render(){
        return (
            <div style={this.footerStyle}>

            </div>
        );
    }
}

export default Section;