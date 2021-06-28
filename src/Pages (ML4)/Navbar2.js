import React, {Component} from 'react';
import './Navbar2.css';
import { FaTable, FaMusic, FaBook, FaVideo, FaMobileAlt, FaMale, FaGamepad} from 'react-icons/fa';
import { BrowserRouter as Router } from "react-router-dom";

import ImageLogo from '../ImageLogo/ImageLogo';
import ML4Logo from '../ML4Logo/ML4Logo';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeM: false,
            activeB: false, 
        };
      }

      setActiveMon = () => {
        this.setState({
            activeM: true
        })
      }

      setActiveMoff = () => {
        this.setState({
            activeM: false
        })
      }

      setActiveBon = () => {
        this.setState({
            activeB: true
        })
      }

      setActiveBoff = () => {
        this.setState({
            activeB: false
        })
      }

    render() {
        return (
            <div className="Nav2">
                <div className="Nav2Box1">
                    <a 
                        style = {{color: this.state.activeB && "rgb(255, 242, 242)"}}
                        onMouseOver = {this.setActiveBon}
                        onMouseLeave = {this.setActiveBoff}
                        onClick = {this.props.setArcade}
                        className="tabOption2">
                        <FaGamepad className="navIcon" size="25px"/>Arcade
                    </a>
                </div>
                <ML4Logo setHome = {this.props.setHome} className="swag"/>
                <div className="Nav2Box2">
                    <a 
                        style = {{color: this.state.activeM && "rgb(255, 242, 242)"}}
                        onMouseOver = {this.setActiveMon}
                        onMouseLeave = {this.setActiveMoff}
                        onClick = {this.props.setAboutUs}
                        className="tabOption2">
                        <FaMale className="navIcon" size="25px"/>
                        About Us
                    </a>
                </div>
            </div>
        );
    }
}


