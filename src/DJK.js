import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Components


//Pages
import Tours from './Pages/Tours/Tours';
import Music from './Pages/Music/Music';
import Books from './Pages/Books/Books';
import Home from './Pages/Home/Home';
import Content from './Pages/Content/Content';
import AboutMe from './Pages/AboutMe/AboutMe';


class DJK extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: true, 
      music: false, 
      book: false, 
      content: false, 
      aboutMe: false, 
      contactMe: false, 
      iwb: true
    };
  }

  setIwb = () => {
    this.setState({
      iwb: !this.state.iwb,
    })
  }

  setHome = () => {
    this.setState({
      home: true,
      music: false, 
      book: false, 
      content: false, 
      aboutMe: false, 
      contactMe: false 
    })
  }

  setMusic = () => {
    this.setState({
      home: false,
      music: true, 
      book: false, 
      content: false, 
      aboutMe: false, 
      contactMe: false 
    })
  }

  setBooks = () => {
    this.setState({
      home: false,
      music: false, 
      book: true, 
      content: false, 
      aboutMe: false, 
      contactMe: false 
    })
  }

  setContent = () => {
    this.setState({
      home: false,
      music: false, 
      book: false, 
      content: true, 
      aboutMe: false, 
      contactMe: false 
    })
  }

  setAboutMe = () => {
    this.setState({
      home: false,
      music: false, 
      book: false, 
      content: false, 
      aboutMe: true, 
      contactMe: false 
    })
  }

  setContactMe = () => {
    this.setState({
      home: false,
      music: false, 
      book: false, 
      content: false, 
      aboutMe: false, 
      contactMe: true 
    })
  }

  render(){
    console.log(this.state.iwb);
    return (
      <div className="App">
          <div onClick = {() => {this.props.setEntrance()}} className = "exitButton">
            <text className="exitText">Exit</text>
            <img src = "/images/entrance.png"/>
          </div>
        {this.state.home && <Home setHome = {this.setHome.bind(this)} setMusic = {this.setMusic.bind(this)} setBooks = {this.setBooks.bind(this)} setContent = {this.setContent.bind(this)} setContactMe = {this.setContactMe.bind(this)} setAboutMe = {this.setAboutMe.bind(this)}/>}
        {this.state.music && <Music setHome = {this.setHome.bind(this)}  setMusic = {this.setMusic.bind(this)} setBooks = {this.setBooks.bind(this)} setContent = {this.setContent.bind(this)} setContactMe = {this.setContactMe.bind(this)} setAboutMe = {this.setAboutMe.bind(this)}/>}
        {this.state.content && <Content setHome = {this.setHome.bind(this)} setMusic = {this.setMusic.bind(this)} setBooks = {this.setBooks.bind(this)} setContent = {this.setContent.bind(this)} setContactMe = {this.setContactMe.bind(this)} setAboutMe = {this.setAboutMe.bind(this)}/>}
        {this.state.aboutMe && <AboutMe setHome = {this.setHome.bind(this)} setMusic = {this.setMusic.bind(this)} setBooks = {this.setBooks.bind(this)} setContent = {this.setContent.bind(this)} setContactMe = {this.setContactMe.bind(this)} setAboutMe = {this.setAboutMe.bind(this)}/>}
        {this.state.iwb ? this.state.book && <Books setScreen = {this.setIwb.bind(this)} setHome = {this.setHome.bind(this)} setMusic = {this.setMusic.bind(this)} setBooks = {this.setBooks.bind(this)} setContent = {this.setContent.bind(this)} setContactMe = {this.setContactMe.bind(this)} setAboutMe = {this.setAboutMe.bind(this)}/> : <Tours setScreen = {this.setIwb.bind(this)}/>}
      </div>
    );
  }
}

export default DJK;