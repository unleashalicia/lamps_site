import React, {Component} from 'react';

class BackgroundImage extends Component {
    constructor(props){
        super(props);

        this.imageStyle = {
            width: "100vw",
            height: "50vh",
            backgroundImage: `url(${this.props.image})`,
            position: "relative",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            border: "2px solid black"
        };

    }

    render(){
        return (
            <div style={this.imageStyle} />
        );
    }
}

export default BackgroundImage;