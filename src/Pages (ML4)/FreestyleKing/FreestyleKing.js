import React, {Component} from 'react';
import './FreestyleKing.css';

import GameScreen from './GameScreen'
import EndScreen from './EndScreen';
import DifficultyScreen from './DifficultyScreen';
import BeatsScreen from './BeatsScreen';
import HomeScreen from './HomeScreen'

import axios from "axios"; 

import {FaAngleDoubleRight, FaAngleDoubleLeft, FaAngleRight, FaSyncAlt, FaCircle, FaPlay,  FaRegPlayCircle, FaTimesCircle, FaArrowAltCircleLeft, FaThumbsDown} from 'react-icons/fa';

class FreestyleKing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screen: 1, 
      score: 0, 
      total: 0, 
      difficulty: null, 
      music: null, 
      bpm: null, 
      fking: false, 
      practice: false, 
      newsKing: true, 
    };
  }

  setBPM = (item) => {
    this.setState({
        bpm: item, 
      });
  }

  setMusic = (item) => {
    this.setState({
        music: item, 
      });
  }

  setDifficulty = (item) => {
    this.setState({
        difficulty: item, 
      });
  }

  setScore = (item1, item2) => {
    this.setState({
        score: item1,
        total: item2 
      });
  }

  setScreen = (item) => {
    this.setState({
        screen: item
      });
  }

  setMode = (item1, item2) => {
    this.setState({
      fking: item1, 
      practice: item2
    });
  }

  render(){
    console.log(this.state.score < this.state.total/2);
    return (
    <div>
        {this.state.screen == 1 ? 
        <HomeScreen setMode = {this.setMode.bind(this)} endGame = {this.props.endGame} setScreen = {this.setScreen.bind(this)} setDifficulty = {this.setDifficulty.bind(this)}/> : this.state.screen == 2 ? 
        <DifficultyScreen  fking = {this.state.fking} endGame = {this.props.endGame} setScreen = {this.setScreen.bind(this)} setDifficulty = {this.setDifficulty.bind(this)}/> : this.state.screen == 3 ? 
        <BeatsScreen fking = {this.state.fking} endGame = {this.props.endGame} setScreen = {this.setScreen.bind(this)} setMusic = {this.setMusic.bind(this)} setBPM = {this.setBPM.bind(this)}/> : this.state.screen == 4 ?
        <GameScreen  endGame = {this.props.endGame} setScreen = {this.setScreen.bind(this)} bpm = {this.state.bpm} music = {this.state.music} diff = {this.state.difficulty} setScore = {this.setScore.bind(this)}/> : 
        <EndScreen  newsKing = {this.state.score == this.state.total} fking = {this.state.fking} news = {this.state.score < this.state.total/2} endGame = {this.props.endGame} setScreen = {this.setScreen.bind(this)} score = {this.state.score} total = {this.state.total}/> 
        }
    </div>
    );
  }
}



export default FreestyleKing;


