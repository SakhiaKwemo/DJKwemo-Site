import React, {Component} from 'react';
import './HomeScreen.css';

import axios from "axios"; 

import {FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleRight, FaSyncAlt, FaCircle, FaPlay,  FaRegPlayCircle, FaTimesCircle, FaArrowAltCircleLeft, FaThumbsDown} from 'react-icons/fa';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  setFKing = () => {
    this.props.setScreen(2)
    this.props.setMode(true, false)
  };

  setPractice = () => {
    this.props.setScreen(2)
    this.props.setMode(false, true)
  };

  render(){
    return (
      <div>
        <div className="appContainer">
          <img className = "freestyleLogo2"src = "/images/freestyleKing.png"/>
          <FaTimesCircle onClick = {() => {this.props.endGame()}} size="60" color="white" className = "XButton"/>
          <div className="restartBox2">
            <button onClick = {() => {this.setFKing()}} className="restartButton"> 
                <text>Freestyle King</text>
            </button>
            <button onClick = {() => {this.setPractice()}} className="restartButton"> 
                <text>Practice</text>
            </button> 
          </div>
        </div>
      </div>

    );
  }
}



export default HomeScreen;


