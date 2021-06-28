import React, {Component} from 'react';
import './Entrance.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {FaArrowAltCircleDown, FaArrowCircleDown, FaAngleDown, FaAngleDoubleDown} from 'react-icons/fa';

//Components


class Entrance extends Component {

  render(){
    return (
        <div className="EntranceColumn">
            <div className="EntranceRow">
                <div className ="imageBackGround">
                    <div className="ML4Box">
                        <h1>Muzic Livez 4Ever</h1>
                        <img className="imageBox2" src="/images/ml4.png"/>
                        <text>COMPANY</text>
                        <button onClick={this.props.setML4}>Go To Site</button>
                    </div>
                    <div className="DJKBox">
                        <h1>DJKwemo</h1>
                        <div className="imageBox3">
                            <img src="/images/KelilGotSauce.png"/>
                        </div>
                        <text>CEO</text>
                        <button onClick={this.props.setDJK}>Go To Site</button>
                    </div>
                </div>
            </div>
            <div className="EntranceRow2">
                <FaAngleDoubleDown className= "arrowAnimation" color="white" size="60"/>
                <div className="appLinks">
                    <img className="logoPhoto1" src="/images/applelogo.png"/>
                    <img className="logoPhoto2" src="/images/googlelogo.png"/>
                </div>
                <div className="phoneLinks">
                    <video autoPlay loop className="appVideo" src="/images/appVideo.mp4"/>
                    <video autoPlay loop className="appVideo" src="/images/appVideo.mp4"/>
                    <video autoPlay loop className="appVideo" src="/images/appVideo.mp4"/>
                </div>
            </div>
        </div>
    );
  }
}

export default Entrance;