import React, {Component, useState, useEffect} from 'react';
import './Music.css';
import Player from './Player/PlayerM';
import Selector from './Selector/Selector';
import NavBar from '../../NavBar/NavBar';
import Streamer from './Streamer/Streamer';

import Footer from '../../Footer/Footer';
import axios from "axios"; 

class Music extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songID: 1, 
      cue: false, 
      chosenSong: [], 
      songTrackList: [], 
    };
  }

  setSongId = (item) => {
    this.setState({
      songID: item
    });
    this.setCue(); 
  };

  setCue = () => {
    this.setState({
      cue: !this.state.cue
    })
  }

  setChosenSong = (item) => {
    this.setState({
      chosenSong: item
    });
  }; 

  setSongTrackList = (item) => {
    this.setState({
      songTrackList: item
    });
  }; 

  componentDidMount() {
    axios.get("http://localhost:3001/api/get/library").then ((response) => {
      this.setChosenSong(response.data[this.state.songID]); 
      this.setSongTrackList(response.data); 
    });
  };

  componentDidUpdate() {
    if(this.state.cue) {
      this.setCue(); 
      axios.get("http://localhost:3001/api/get/library").then ((response) => {
        console.log("change of songID"); 
        this.setChosenSong(response.data[this.state.songID]);
        this.setSongTrackList(response.data); 
      });
    }
  };
  
  render(){
    const track = this.state.chosenSong;

    return (
      <div id="MusicBox1"> 
        <NavBar
          setHome = {this.props.setHome} 
          setMusic = {this.props.setMusic} 
          setBooks = {this.props.setBooks} 
          setContent = {this.props.setContent} 
          setContactMe = {this.props.setContactMe} 
          setAboutMe = {this.props.setAboutMe}
        />
        <Selector songs = {this.state.songTrackList} setsongId = {this.setSongId.bind(this)}/>
        <Player 
          openscreen = {this.setScreen}
          closescreen = {this.setScreen}
          song = {track.mp4}
          artist = {track.artist} 
          title = {track.title}
        />
      </div>

    );
  }
}



export default Music;


/*
  <NavBar
    activeT = {false} 
    activeM = {false} 
    activeB = {false} 
    activeCt = {false} 
    activeA = {false} 
    activeCm = {false} 
  />
*/

