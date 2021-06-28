import React, {Component} from 'react';

import axios from "axios"; 

import {FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleRight, FaSyncAlt, FaCircle, FaPlay,  FaRegPlayCircle, FaTimesCircle, FaArrowAltCircleLeft, FaThumbsDown} from 'react-icons/fa';

class GameScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0, 
      bpm: this.props.bpm, 
      difficulty: this.props.diff, 
      button: false,
      color: "white",
      box3color: "white", 
      box5color: "white", 
      box4color: "white", 
      prevbox4: "white", 
      countdown: 3, 
      start: false, 
      beginning: 3, 
      count: 0, 
      score: 0, 
      total: 0, 
      box1: [],
      box2: [],
      box3: [],
      box4: [],
      box5: [], 
      music: this.props.music
    };
  }

  setId = (item) => {
    this.setState({
      id: item
    });
  }

  setButtonOn = () => {
    this.myDing.volume = 0.2;
    this.myOoh.volume = 0.3;
    if(this.state.count == 0) {
      this.myDing.play();    
    }
    else if (this.state.count == 1) {
      this.myDing.play(); 
      this.myCrowd.play();
    }
    else {
      this.myDing.play(); 
      this.myOoh.play();
    }
    this.setState({
      button: false, 
      box3color: "gold", 
      count: this.state.count + 1
    });
  }

  setButtonOff = () => {
    this.setState({
      button: true, 
      box3color: "white"
    });
  }

  setBeginning = () => {
    this.setState({
      beginning: this.state.beginning - 1
    });
  }

  setStart = () => {
    if(this.myCountdown.ended) {
      this.myVideo.play();
      this.setState({
        start: true
      });
    }
    else {
      this.setState({
        start: false
      });
    }
  }

  Restart = () => {
    this.setState({
      score: 0, 
      total: 0, 
      color: "white", 
      box4color: "white", 
      prevbox4: "white", 
      beginning: 3, 
    });
    this.myCountdown.load();
    this.myCountdown.play();
    this.myVideo.load(); 
    this.myVideo.pause();
    this.setStart(); 
    this.setId(Math.floor(Math.random() * (50)));
    axios.get("http://localhost:3001/api/get/freestyleWords").then ((response) => {
      this.setId(Math.floor(Math.random() * (50)));
      this.setBox1(response.data[this.state.id])
      this.setId(Math.floor(Math.random() * (50)));
      this.setBox2(response.data[this.state.id])
      this.setId(Math.floor(Math.random() * (50)));
      this.setBox3(response.data[this.state.id])
    });
    this.setBox5([]);
    this.setBox4([]);
    this.setBox5Color("white");
  }

  goBack = () => {
    this.myVideo.pause();
    this.props.setScreen(3);
  }

  lateScore = () => {
    this.myDing.volume = 0.2;
    this.myDing.play();
    this.setState({
      score: this.state.score + 1, 
      color: "gold", 
      box4color: "gold", 
      prevbox4: "gold"
    });

  }

  setScore = () => {
    if(this.state.beginning > 0){
      this.setBeginning();
    }
    else {
      if(!this.state.button)
      this.setState({
        score: this.state.score + 1, 
        total: this.state.total + 1
      });
      else
        this.setState({
          total: this.state.total + 1
      });
    }
  }

  setColor = () => {
    if(this.state.beginning > 0){
      this.setBeginning();
    }
    else {
      if(!this.state.button)
        this.setState({
          color: "gold"
        });
      else {
        this.setState({
          color: "red", 
          count: 0
        });
    }
    }
  }

  setBox4Color = () => {
    if(this.state.beginning > 0){
      this.setBeginning();
    }
    else {
      if(!this.state.button)
      this.setState({
        box4color: "gold", 
        prevbox4: "gold"
      });
    else
      this.setState({
        box4color: "red", 
        prevbox4: "red"
      });
    }
  }

  setBox5Color = (item) => {
    this.setState({
      box5color: item
    });
  }

  setWords = (item) => {
    this.setState({
      words: item
    });
  }

  setBox1 = (item) => {
    this.setState({
      box1: item
    });
  }

  setBox2 = (item) => {
    this.setState({
      box2: item
    });
  }

  setBox3 = (item) => {
    this.setState({
      box3: item
    });
  }

  setBox4 = (item) => {
    this.setState({
      box4: item, 
    });
  }

  setBox5 = (item) => {
    this.setState({
      box5: item
    });
  }

  setFinish = () => {
    this.myVideo.pause();
    this.props.setScreen(5); 
    this.props.setScore(this.state.score, this.state.total)
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

  componentDidMount() {
    this.myDing.pause();
    this.myOoh.pause(); 
    this.myCrowd.pause(); 
    this.myVideo.pause();

    axios.get("http://localhost:3001/api/get/freestyleWords").then ((response) => {
      this.setId(Math.floor(Math.random() * (50)));
      this.setBox1(response.data[this.state.id])
      this.setId(Math.floor(Math.random() * (50)));
      this.setBox2(response.data[this.state.id])
      this.setId(Math.floor(Math.random() * (50)));
      this.setBox3(response.data[this.state.id])
    });

    const interval = setInterval(() => {
      if(!this.state.start) {
        this.setStart(); 
        console.log(this.state.start)
      }
      if(this.state.start) {
        this.setScore();
        this.setColor();
        this.setBox5Color(this.state.box4color);
        this.setBox4Color(); 
        this.setButtonOff();
        this.setBox5(this.state.box4);
        this.setBox4(this.state.box3);
        this.setBox3(this.state.box2);
        this.setBox2(this.state.box1);
        axios.get("http://localhost:3001/api/get/freestyleWords").then ((response) => {
          this.setId(Math.floor(Math.random() * (50)));
          this.setBox1(response.data[this.state.id])
        });
      }
    }, ((60000)/this.state.bpm * this.state.difficulty));
    return () => clearInterval(interval);
  }

  render(){

    const input = (
      <input 
      //disabled
      ref={input => {this.input = input;}}
      onChange = {this.seekVid}
      className="inputK"
      type="range" 
      min="0" 
      max="100"
    />
    );

    const ding = (
      <video autoplay="false" className="playerVideo" src="\images\1- ding.mp4"
      ref={ding => {
        this.myDing = ding;
    }}/> 
    );

    const crowd = (
      <video autoplay="false" className="playerVideo" src="\images\2 - crowd.mp4"
      ref={crowd => {
        this.myCrowd = crowd;
    }}/> 
    );

    const ooh = (
      <video autoplay="false" className="playerVideo" src="\images\3 - ooh.mp4"
      ref={crowd => {
        this.myOoh = crowd;
    }}/> 
    );

    const video = (
      <video 
      //muted 
      autoplay="false" className="playerVideo" src={this.state.music}
      ref={video => {
        this.myVideo = video;
      }}
      onTimeUpdate={this.setTime}
      onEnded={this.setFinish}/> 
    );

    const countdown = (
      <video autoplay="false" className="countdown" src="\images\countdown.mp4"
      ref={video => {
        this.myCountdown = video;
      }}/> 
    );

    const countdown2 = (
      <video autoplay="false" className="playerVideo" src="\images\countdown.mp4"
      ref={video => {
        this.myCountdown = video;
      }}/> 
    );


    return (
      <div>
        {video}
        {ding}
        {crowd}
        {ooh}
        {countdown2}
        <div className="appContainer">
          {this.state.start && <FaArrowAltCircleLeft onClick = {() => {this.goBack()}} size="60" color="white" className = "BackButton"/>}
          <FaSyncAlt onClick = {() => {this.Restart()}} size="60" color="gold" className = "SyncButton"/>
          <img className = "freestyleLogo"src = "/images/freestyleKing.png"/>
          {this.state.start && <FaTimesCircle onClick = {() => {this.props.endGame()}}size="60" color="white" className = "XButton"/>}
          <h1 style={{color: this.state.color}}>{this.state.score}/{this.state.total}</h1>
          {!this.state.start ? 
            countdown:
            <text className="freestyleWords">{this.state.box3.word}</text>
          }
          {input}
          {this.state.button ?
          <button onClick = {this.setButtonOn} className="yellowButton1"> 
            <text className="yButton1">Hit !!!</text>
          </button> :
          <button className="yellowButton2"> 
            <text className="yButton2">Hit !!!</text>
          </button>
          }
          <div className = "emptyBox">
            <div style={{borderColor: this.state.box5color}} className="emptySlot4">
              <text>{this.state.box5.word}</text>
            </div>
            <div onClick = {this.lateScore} onMouseEnter = {() => {this.setState({box4color: "gold"});}} onMouseLeave = {() => {this.setState({box4color: this.state.prevbox4});}} style={{borderColor: this.state.box4color}} className="emptySlot4">
              <text>{this.state.box4.word}</text>
            </div>
            <div style={{borderColor: this.state.box3color}} className="emptySlot2">
              <text>{this.state.box3.word}</text>
            </div>
            <div className="emptySlot">
              <text>{this.state.box2.word}</text>
            </div>
            <div className="emptySlot">
              <text>{this.state.box1.word}</text>
            </div>
          </div>
        </div>
      </div>

    );
  }
}



export default GameScreen;


