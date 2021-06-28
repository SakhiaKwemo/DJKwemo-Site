import React, {Component} from 'react';
import './ML4.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {FaArrowAltCircleLeft, FaThumbsDown} from 'react-icons/fa';


//Components


//Pages
import Home from './Pages (ML4)/Home'
import AboutUs from './Pages (ML4)/AboutUs'
import Arcade from './Pages (ML4)/Arcade'


class ML4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: true, 
      arcade: false, 
      aboutus: false
    };
  }

  setHome = () => {
    this.setState({
      home: true, 
      arcade: false, 
      aboutus: false
    })
  }

  setArcade = () => {
    this.setState({
      home: false, 
      arcade: true, 
      aboutus: false
    })
  }

  setAboutUs = () => {
    this.setState({
      home: false, 
      arcade: false, 
      aboutus: true
    })
  }

  render(){
    console.log(this.state.iwb);
    return (
        <div>
          <div onClick = {() => {this.props.setEntrance()}} className = "exitButton">
            <text className="exitText">Exit</text>
            <img src = "/images/entrance.png"/>
          </div>
          {this.state.home && <Home setHome = {this.setHome.bind(this)} setAboutUs = {this.setAboutUs.bind(this)} setArcade = {this.setArcade.bind(this)}/>}
          {this.state.aboutus && <AboutUs setHome = {this.setHome.bind(this)} setAboutUs = {this.setAboutUs.bind(this)} setArcade = {this.setArcade.bind(this)}/>}
          {this.state.arcade && <Arcade setHome = {this.setHome.bind(this)} setAboutUs = {this.setAboutUs.bind(this)} setArcade = {this.setArcade.bind(this)}/>}
        </div>
    );
  }
}

export default ML4;