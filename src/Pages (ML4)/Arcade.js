import React, {Component} from 'react';
import './Arcade.css';
import Footer2 from '../Pages (ML4)/Footer2';
import NavBar2 from '../Pages (ML4)/Navbar2';

import FreestyleKing from './FreestyleKing/FreestyleKing';

import {FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleRight, FaSyncAlt, FaCircle, FaPlay,  FaRegPlayCircle, FaTimesCircle, FaArrowAltCircleLeft, FaThumbsDown} from 'react-icons/fa';

import { Scrollbars } from 'react-custom-scrollbars';

class Arcade extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blur: false
    };
  }

  setBlur = () => {
    this.setState({
        blur: !this.state.blur
    });
  };

  renderThumb({ style, ...props }) {
    const thumbStyle = {
        backgroundColor: `rgb(233, 135, 178)`, 
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

    console.log(this.state.blur)

    return (
      <div>
        {this.state.blur && <FreestyleKing endGame = {this.setBlur.bind(this)}/>}
        {this.state.blur ? 
        <div id="MusicBox3"> 
          <NavBar2 
              setHome = {this.props.setHome} 
              setAboutUs = {this.props.setAboutUs} 
              setArcade = {this.props.setArcade}
          />
          <div className = "headingBox">
            <div className = "musicTitle2">
                <text>Arcade</text>
            </div>
          </div>
          <div className = "streamBox">
            <div className="choiceBox">
              <div className="choiceOptionB2">
                <div className = "textOption">
                  <text>Games</text>
                </div>
                <div className="arrow">
                  <FaAngleRight size="36" color="white"/>
                </div>
              </div>
            </div>
            <div className="displayBoxB2">
              <Scrollbars style = {{width: "100%", height: "100%"}} renderThumbVertical={this.renderThumb}>
              <div id = "ArcadeBox4">
                <text>Games</text>
              </div>
              <div>
                <img className = "appBox"src = "/images/freestyleKing.png"/>
              </div>
              </Scrollbars>
            </div>
          </div>
          <Footer2/>
        </div>:
        <div id="MusicBox2"> 
        <NavBar2 
            setHome = {this.props.setHome} 
            setAboutUs = {this.props.setAboutUs} 
            setArcade = {this.props.setArcade}
        />
        <div className = "headingBox">
          <div className = "musicTitle2">
              <text>Arcade</text>
          </div>
        </div>
        <div className = "streamBox">
          <div className="choiceBox">
            <div className="choiceOptionB2">
              <div className = "textOption">
                <text>Games</text>
              </div>
              <div className="arrow">
                <FaAngleRight size="36" color="white"/>
              </div>
            </div>
          </div>
          <div className="displayBoxB2">
            <Scrollbars style = {{width: "100%", height: "100%"}} renderThumbVertical={this.renderThumb}>
            <div id = "ArcadeBox4">
              <text>Games</text>
            </div>
            <div >
              <img onClick = {() => {this.setBlur()}} className = "appBox"src = "/images/freestyleKing.png"/>
            </div>
            </Scrollbars>
          </div>
        </div>
        <Footer2/>
      </div> 
        }
      </div>

    );
  }
}



export default Arcade;


