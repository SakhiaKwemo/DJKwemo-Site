import React, {Component} from 'react';
import './DifficultyScreen.css';

import axios from "axios"; 

import {FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleRight, FaSyncAlt, FaCircle, FaPlay,  FaRegPlayCircle, FaTimesCircle, FaArrowAltCircleLeft, FaThumbsDown} from 'react-icons/fa';
import e from 'cors';

class DifficultyScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.fking, 
      difficulty: null
    };
  }

  setChecked = () => {
    this.setState({
      checked: true,
      });
  }

  sendInfo = () => {
    if(this.props.fking){
      this.props.setDifficulty(8);
      this.props.setScreen(3);
    }
    else {
      this.props.setDifficulty(this.state.difficulty)
      this.props.setScreen(3);
    }
  }

  onChange = (e) => {
    this.setState({
      difficulty: e.target.value
      });
  }

  render(){
    return (
      <div>
        <div className="appContainer">
          <FaArrowAltCircleLeft onClick = {() => {this.props.setScreen(1)}} size="60" color="white" className = "BackButton"/>
          <img className = "freestyleLogo"src = "/images/freestyleKing.png"/>
          <FaTimesCircle onClick = {() => {this.props.endGame()}} size="60" color="white" className = "XButton"/>
          <div className="diffColumn">
            <p>Difficulty</p>
            <div className="diffRow">
                <div className="barsBox">
                <text style = {{color: "red", textDecoration: "underline"}}># Bars</text>
                </div>
                <div className="speedBox">
                <text style = {{color: "gray", textDecoration: "underline"}}>Speed</text>
                </div>
                <div className="levelBox">
                <text style = {{color: "gold", textDecoration: "underline"}}>Level</text>
                </div>
            </div>
            <div className="diffRow">
                 {this.props.fking ? <input 
                  onClick = {this.setChecked} 
                  className = "diffSelect" 
                  name = "difficulty" 
                  type = "radio"
                  value = "8"
                  onInput={this.onChange}
                  checked
                  />:
                  <input 
                  onClick = {this.setChecked} 
                  className = "diffSelect" 
                  name = "difficulty" 
                  type = "radio"
                  value = "8"
                  onChange={this.onChange}
                  />
                 }
                <div className="barsBox">
                <text>Ever 2 Bar</text>
                </div>
                <div className="speedBox">
                <text>2x</text>
                </div>
                <div className="levelBox">
                <text>Freestyle King</text>
                </div>
            </div>
            <div className="diffRow">
                  <input 
                  onClick = {this.setChecked} 
                  className = "diffSelect" 
                  name = "difficulty" 
                  type = "radio"
                  value = "8"
                  onChange={this.onChange}
                  />
                <div className="barsBox">
                <text>Ever 4 Bar</text>
                </div>
                <div className="speedBox">
                <text>4x</text>
                </div>
                <div className="levelBox">
                <text>Hard</text>
                </div>
            </div>
            <div className="diffRow">
                  <input 
                  onClick = {this.setChecked} 
                  className = "diffSelect" 
                  name = "difficulty" 
                  type = "radio"
                  value = "32"
                  onChange={this.onChange}
                  />
                <div className="barsBox">
                <text>Ever 8 Bar</text>
                </div>
                <div className="speedBox">
                <text>8x</text>
                </div>
                <div className="levelBox">
                <text>Normal</text>
                </div>
            </div>
            <div className="diffRow">
                  <input 
                  onClick = {this.setChecked} 
                  className = "diffSelect" 
                  name = "difficulty" 
                  type = "radio"
                  value = "64"
                  onChange={this.onChange}
                  />
                <div className="barsBox">
                <text>Every 16 Bar</text>
                </div>
                <div className="speedBox">
                <text>16x</text>
                </div>
                <div className="levelBox">
                <text>Easy</text>
                </div>
            </div>
            {this.state.checked ? 
              <button onClick = {() => this.sendInfo()} className="NextButton"> 
              <text>Next >></text>
              </button> :
              <button className="NextButton2"> 
              <text>Next >></text>
              </button>
            }
        </div>
        </div>
      </div>

    );
  }
}



export default DifficultyScreen;


