import React, {Component} from 'react';
import './EndScreen.css';

import axios from "axios"; 

import {FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleRight, FaSyncAlt, FaCircle, FaPlay,  FaRegPlayCircle, FaTimesCircle, FaArrowAltCircleLeft, FaThumbsDown} from 'react-icons/fa';

class EndScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div>
        <div className="appContainer">
          <img className = "freestyleLogo"src = "/images/freestyleKing.png"/>
          <FaTimesCircle onClick = {() => {this.props.endGame()}} size="60" color="white" className = "XButton"/>
          {this.props.news & !this.props.fking ? 
            <div className= "congratsBox">
            <text style = {{color: "white"}}>That was trash, you scored:</text>
            <text style = {{color: "white"}}>{this.props.score}/{this.props.total} !!</text>
            </div>: 
            !this.props.news & !this.props.fking ?
            <div className= "congratsBox">
            <text style = {{color: "white"}}>Well done, you scored:</text>
            <text style = {{color: "white"}}>{this.props.score}/{this.props.total} !!</text>
            </div>: 
            !this.props.newsKing & this.props.fking ?
            <div className= "congratsBox">
            <text style = {{color: "red"}}>You Failed The Challenge:</text>
            <text style = {{color: "red"}}>{this.props.score}/{this.props.total} !!</text>
            </div>:
            <div className= "congratsBox">
            <text style = {{color: "gold"}}>You are The Freestyle King</text>
            <text style = {{color: "gold"}}>{this.props.score}/{this.props.total} !!</text>
            </div>
          }
          <div className="restartBox">
            <button onClick = {() => {this.props.setScreen(4)}} className="restartButton"> 
                <text>Restart</text>
            </button>
            <button onClick = {() => {this.props.setScreen(1)}} className="restartButton"> 
                <text>Play Again</text>
            </button> 
          </div>
        </div>
      </div>

    );
  }
}



export default EndScreen;


