import React, {Component} from 'react';
import './PlayerB.css';
import Controls from '../Controls/ControlsB';

function pad(n, width, z=0) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  
const minutesAndSeconds = (position) => ([
pad(Math.floor(position / 60), 2),
pad(position % 60, 2),
]);

export default class Player extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          paused: false,
          totalLength: 0,
          currentPosition: 0,
          selectedTrack: 0,
        };
    }

    setDuration = () => {
        this.setState({totalLength: Math.floor(this.myVideo.duration)});
    }

    seekVid = () => {
        var seekto = Math.floor(this.myVideo.duration) * (this.input.value/100);
        this.myVideo.currentTime = seekto;
    }

    setTime = () => {
        this.setState({currentPosition: Math.floor(this.myVideo.currentTime)});
        var nt = Math.floor(this.myVideo.currentTime) * (100/this.myVideo.duration);
        this.input.value = nt;
    }
    
    setRevert = () => {
        if(this.state.paused) {
            this.myVideo.play()
            this.setState({paused: !this.state.paused})
            console.log(this.state.paused)
        }
        else {
            this.myVideo.pause()
            this.setState({paused: !this.state.paused})
            console.log(this.state.paused)
        }
    }
    


    render () {
    
        const elapsed = minutesAndSeconds(this.state.currentPosition);
        const remaining = minutesAndSeconds(this.state.totalLength - this.state.currentPosition);
    
        const input = (
          <input 
          ref={input => {
              this.input = input;
          }}
          onChange = {this.seekVid}
          type="range" 
          className="inputB"
          min="0" 
          max="100"
        />
        );
        
        const video = (
            <video autoPlay muted loop className="playerVideo" src="/images/kgb.video.mp4" 
            ref={video => {
                this.myVideo = video;
            }}
            onPlay={this.setDuration}    // Callback when video loads   
            onTimeUpdate={this.setTime} /> // Callback every ~250ms with currentTime
        );

        return (
            <div className="playerContainerB">
                {video}
                <div className="titleBox">
                    <text className ="artisttitle ">I Will Become</text>   
                    <text className ="songtitle "> - "My Life" (Chapter 1)</text>  
                </div>
                <div className="sliderTimer">
                    <div className="leftBox">
                    <text className="sliderText">
                        {elapsed[0] + ":" + elapsed[1]}
                    </text>
                    </div>
                    <div className="rightBox">
                    <text className="sliderText">
                        {this.state.totalLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
                    </text>
                    </div>
                </div>
                {input}
                <Controls 
                      onPressPause = {this.setRevert.bind(this)}
                      paused = {this.state.paused}
                />
            </div>
        );   
    } 
}

/*
<Seeker
    trackLength={this.state.totalLength}
    currentPosition={this.state.currentPosition} 
    onDrag = {this.setRevert.bind(this)}
/>
*/