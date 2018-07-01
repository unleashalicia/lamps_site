import React, {Component} from 'react';
import YouTube from 'react-youtube';
 
class Video extends Component {
  render() {
    const videoStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        tranform: 'translate(-50%, -50%)'
    }

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <span style={{videoStyles}}>
        <YouTube
            videoId="M-ulux3-8Ng"
            opts={opts}
            onReady={this._onReady}
        />
      </span>
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;