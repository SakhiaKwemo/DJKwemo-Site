import React, {Component} from 'react';
import './Books.css';
import Player from './Player/PlayerB';
import NavBar from '../../NavBar/NavBar';
import { FaAngleRight} from 'react-icons/fa';

import { Scrollbars } from 'react-custom-scrollbars';

import AudioBook from "./AudioBook/AudioBook";
import EBook from "./EBook/EBook";

class Books extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ebook: true, 
      audiobook: false
    };
  }

  setEBook = () => {
    this.setState({
      ebook: true, 
      audiobook: false
    })
  }

  setAudioBook = () => {
    this.setState({
      ebook: false, 
      audiobook: true
    })
  }
  
  render(){

    return (
      <div id="MusicBox"> 
        <NavBar
          setHome = {this.props.setHome}  
          setMusic = {this.props.setMusic} 
          setBooks = {this.props.setBooks} 
          setContent = {this.props.setContent} 
          setContactMe = {this.props.setContactMe} 
          setAboutMe = {this.props.setAboutMe}
        />
        <div className = "headingBox">
          <div className = "musicTitle">
              <text>Books</text>
          </div>
        </div>
        <div className = "streamBox3">
          <div className="choiceBox">
            <div onClick = {this.setEBook} className="choiceOptionB">
              <div className = "textOption">
                <text>E-Books</text>
              </div>
              <div className="arrow">
                <FaAngleRight size="36" color="rgb(233, 135, 178)"/>
              </div>
            </div>
            <div onClick = {this.setAudioBook} className="choiceOptionB">
              <div className = "textOption">
                <text>Audio Books</text>
              </div>
              <div className="arrow">
                <FaAngleRight size="36" color="rgb(233, 135, 178)"/>
              </div>
            </div>
          </div>
          <div className="displayBoxB">
            <Scrollbars style = {{width: "100%", height: "100%"}} renderThumbVertical={this.renderThumb}>
              {this.props.children}
              {this.state.ebook && <EBook setScreen = {this.props.setScreen}/>}
              {this.state.audiobook && <AudioBook/>}
            </Scrollbars>
          </div>
        </div>
        <Player/>
      </div>

    );
  }
}



export default Books;


