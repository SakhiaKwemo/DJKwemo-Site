import React, {Component} from 'react';
import './PlayerM.css';

import {FaChevronDown, FaChevronUp} from 'react-icons/fa';

import Controls from './Controls/Controls';
//import Seeker from "./Seeker/Seeker";

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
        this.setState({paused: false})
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
          ref={input => {this.input = input;}}
          onChange = {this.seekVid}
          className="inputM"
          type="range" 
          min="0" 
          max="100"
        />
        );
        
        const video = (
            <video loop autoplay="true" className="playerVideo" src={this.props.song}
            ref={video => {
                this.myVideo = video;
            }}
            onCanPlay={this.setDuration}    // Callback when video loads   
            onTimeUpdate={this.setTime} /> // Callback every ~250ms with currentTime
        );

        return (
            <div className="playerContainer">
                {video}
                <div className="titleBoxM">
                    <text className ="artisttitleM ">{this.props.artist}</text>   
                    <text className ="songtitleM ">{this.props.title} (Prod. By DJKwemo)</text>  
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