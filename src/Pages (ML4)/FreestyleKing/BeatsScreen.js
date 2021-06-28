import React, {Component} from 'react';
import './BeatsScreen.css';

import axios from "axios"; 

import { Scrollbars } from 'react-custom-scrollbars';

import StarRatingComponent from 'react-star-rating-component'; 

import {FaDownload, FaPlayCircle, FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleRight, FaSyncAlt, FaCircle, FaPlay,  FaRegPlayCircle, FaTimesCircle, FaArrowAltCircleLeft, FaThumbsDown, FaPauseCircle} from 'react-icons/fa';

class BeatsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        beats: [], 
        music: "\images\Library\MP4\AnyConv.com__DJKwemo -Like This .mp4", 
        play: false, 
        beatChosen: null, 
        visibility: "hidden", 
        bpm: "123 BPM", 
    };
  }

  setBeatChosen = (item) => {
    this.setState({
        beatChosen: item
      });
  }

  setPlay = () => {
    this.setState({
        play: true
      });
    this.myVideo.play();
  }

  setPause = () => {
    this.setState({
        play: false
      });
    this.myVideo.pause();
  }

  setBeats = (item) => {
    if(this.state.play) {
        this.setState({
            beats: item,
            play: !this.state.play 
          });
    }
    else {
        this.setState({
            beats: item, 
          });
    }
  }

  
  setMusic = (item1, item2, item3) => {
    this.setState({
        music: item1,
        visibility: "visible", 
        bpm: item3
        });
    this.setPlay();
    this.setBeatChosen(item2);
  }

  
  sendInfo = () => {
    console.log(this.state.bpm.slice(0,-4));
    const number = parseInt(this.state.bpm.slice(0,-4));
    this.props.setBPM(number); 
    this.props.setMusic(this.state.music)
    this.props.setScreen(4);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/get/library").then ((response) => {
      this.setBeats(response.data); 
    });
  };

  renderThumb({ style, ...props }) {
    const thumbStyle = {
        backgroundColor: `gold`, 
        borderRadius: "5px", 
        width: "10px"
    };
    return (
        <div
            style={{ ...style, ...thumbStyle }}
            {...props}/>
    );
  }

  render(){

    const video = (
        <video 
        //muted 
        loop autoplay="true" className="playerVideo" src={this.state.music}
        ref={video => {
          this.myVideo = video;
        }}
        onTimeUpdate={this.setTime}
        /> 
      );

    const songs = this.state.beats;

    const songList = 
    songs.filter((song) => {
      if(this.props.fking){
        if (song.title.toLowerCase().includes("freestyle")) {
          return song;
        }
      }
      else {
        if (song.type == "BEAT" || song.type == "INSTRUMENTAL") {
          return song;
        }
      }
    }).map((song,index) => {
    return (
      <tr className = "rowTitle2" key={index} onClick = {() => {this.setMusic(song.mp4, song.title, song.BPM)}} >
        <td className="libTitle2">
          <text>{song.title}</text>
        </td>
        <td>{song.BPM}</td>
        <td>
        <StarRatingComponent
          name="rate3" 
          value={song.rating} /* number of selected icon (`0` - none, `1` - first) */
          starCount={5} /* number of icons in rating, default `5` */
          starColor={"gold"}
          editing={false} /* is component available for editing, default `true` */
        />
        </td>
      </tr>
    );
  })

    return (
      <div>
        {video}
        <div className="appContainer">
          <FaArrowAltCircleLeft onClick = {() => {this.props.setScreen(2)}} size="60" color="white" className = "BackButton"/>
          <img className = "freestyleLogo"src = "/images/freestyleKing.png"/>
          <FaTimesCircle onClick = {() => {this.props.endGame()}} size="60" color="white" className = "XButton"/>
            <div className="diffColumn">
              <p>Beats</p>
            </div>
            {this.state.visibility == "visible" ? 
              <button onClick = {() => this.sendInfo()} className="StartButton"> 
              <text>Start Game >></text>
              </button>  :
              <button className="StartButton2"> 
              <text>Start Game >></text>
              </button> 
            }
            <div className="beatChosenBox">
                <div className="pauseBox">
                    {this.state.play ? 
                        <FaPauseCircle style = {{visibility: this.state.visibility}} onClick={this.setPause} className="PauseButton" size="15"/>: 
                        <FaPlayCircle style = {{visibility: this.state.visibility}} onClick={this.setPlay} className="PauseButton" size="15"/>
                    }
                </div>
                <text className="beatChosen">{this.state.beatChosen}</text>
            </div>
            <Scrollbars style = {{width: "95%", height: "3500px"}} renderThumbVertical={this.renderThumb}>
                <table className="libTable">
                    <thead >
                        <tr className="libHead2">
                        <td className="libTitle3">TITLE</td>
                        <td>BPM</td>
                        <td>RATING</td>
                        </tr>
                    </thead>
                    <tbody className="libBody">
                        {songList}
                    </tbody>
                </table>
            </Scrollbars>
        </div>
      </div>

    );
  }
}



export default BeatsScreen;


