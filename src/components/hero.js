import React, {Component} from 'react';

class Hero extends Component {
    constructor(props){
        super(props);

        this.imageStyle = {
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${this.props.image})`,
            position: "relative",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        };

    }

    render(){
        return (
            <div style={this.imageStyle} />
        );
    }
}

export default Hero;