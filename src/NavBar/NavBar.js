import React, {Component} from 'react';
import './NavBar.css';
import { FaTable, FaMusic, FaBook, FaVideo, FaMobileAlt, FaMale} from 'react-icons/fa';
import { BrowserRouter as Router } from "react-router-dom";

import ImageLogo from '../ImageLogo/ImageLogo';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeT: false, 
            activeM: false,
            activeB: false, 
            activeCt: false, 
            activeA: false,
            activeCm: false 
        };
      }

      setActiveTon = () => {
        this.setState({
            activeT: true
        })
      }

      setActiveToff = () => {
        this.setState({
            activeT: false
        })
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

      setActiveCton = () => {
        this.setState({
            activeCt: true
        })
      }

      setActiveCtoff = () => {
        this.setState({
            activeCt: false
        })
      }

      setActiveAon = () => {
        this.setState({
            activeA: true
        })
      }

      setActiveAoff = () => {
        this.setState({
            activeA: false
        })
      }

      setActiveCmon = () => {
        this.setState({
            activeCm: true
        })
      }

      setActiveCmoff = () => {
        this.setState({
            activeCm: false
        })
      }

    render() {
        return (
            <div className="Nav">
                <div className="NavBox1">
                    <a 
                        style = {{color: this.state.activeB && "rgb(255, 242, 242)"}}
                        onMouseOver = {this.setActiveBon}
                        onMouseLeave = {this.setActiveBoff}
                        onClick = {this.props.setBooks}
                        className="tabOption">
                        <FaBook className="navIcon" size="15px"/>Books
                    </a>
                    <a 
                        style = {{color: this.state.activeM && "rgb(255, 242, 242)"}}
                        onMouseOver = {this.setActiveMon}
                        onMouseLeave = {this.setActiveMoff}
                        onClick = {this.props.setMusic}
                        className="tabOption">
                        <FaMusic className="navIcon" size="15px"/>Music
                    </a>
                </div>
                <ImageLogo setHome = {this.props.setHome}className="swag"/>
                <div className="NavBox2">
                    <a 
                        style = {{color: this.state.activeCt && "rgb(255, 242, 242)"}}
                        onMouseOver = {this.setActiveCton}
                        onMouseLeave = {this.setActiveCtoff}
                        onClick = {this.props.setContent}
                        className="tabOption">
                        <FaVideo className="navIcon" size="15px"/>
                        I.W.B
                    </a>
                    <a 
                        style = {{color: this.state.activeA && "rgb(255, 242, 242)"}}
                        onMouseOver = {this.setActiveAon}
                        onMouseLeave = {this.setActiveAoff}
                        onClick = {this.props.setAboutMe}
                        className="tabOption">
                        <FaMale className="navIcon2" size="20px"/>About Me
                    </a>
                </div>
            </div>
        );
    }
}


