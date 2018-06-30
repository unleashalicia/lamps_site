import React, { Component } from 'react';

class VideoSection extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="row videoContainer">
                <div className="video"></div>
            </div>
        )
    }
}

export default VideoSection;