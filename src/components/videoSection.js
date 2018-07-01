import React, { Component } from 'react';
import Video from './video';
import '../assets/css/videoSection.css';

class VideoSection extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="row videoContainer">
                <div className="video">
                    <Video />
                </div>
            </div>
        )
    }
}

export default VideoSection;








//Youtube API will call this function when the video player is ready.
