import React, {Component} from 'react';
import './Content.css';

import { FaAngleRight} from 'react-icons/fa';

import { Scrollbars } from 'react-custom-scrollbars';

import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';

import Documentary from "./Documentary/Documentary";
import Milestone from "./Milestone/Milestone";


class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      documentary: false, 
      intro: true
    };
  }

  setDocumentary = () => {
    this.setState({
      documentary: true, 
      intro: false
    })
  }

  setIntro = () => {
    this.setState({
      documentary: false, 
      intro: true
    })
  }

  render(){
    return (
      <div className="ContentBigBox">
        <NavBar
          setHome = {this.props.setHome}  
          setMusic = {this.props.setMusic} 
          setBooks = {this.props.setBooks} 
          setContent = {this.props.setContent} 
          setContactMe = {this.props.setContactMe} 
          setAboutMe = {this.props.setAboutMe}
        />
        <div className = "headingBox">
          <div className = "musicTitle">
              <text>I Will Become</text>
          </div>
        </div>
        <div className = "streamBox3">
          <div className="choiceBox">
            <div onClick = {this.setIntro} className="choiceOptionB">
              <div className = "textOption">
                <text>Intro</text>
              </div>
              <div className="arrow">
                <FaAngleRight size="36" color="rgb(233, 135, 178)"/>
              </div>
            </div>
            <div onClick = {this.setDocumentary} className="choiceOptionB">
              <div className = "textOption">
                <text>Documentary</text>
              </div>
              <div className="arrow">
                <FaAngleRight size="36" color="rgb(233, 135, 178)"/>
              </div>
            </div>
          </div>
          <div className="displayBoxC">
            <Scrollbars style = {{width: "100%", height: "100%"}} renderThumbVertical={this.renderThumb}>
              {this.props.children}
              {this.state.documentary && <Documentary/>}
              {this.state.intro && <Milestone/>}
            </Scrollbars>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Content;

