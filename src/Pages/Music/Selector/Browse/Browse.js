import React, {Component} from 'react';
import './Browse.css';

import Carousel, { consts } from 'react-elastic-carousel';
import Item from "../Custom/Item"; 

import axios from "axios"; 

import {FaAngleDoubleRight, FaAngleDoubleLeft, FaCircle, FaPlay,  FaRegPlayCircle} from 'react-icons/fa';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

class Browse extends Component {

    constructor(props) {
        super(props);
        this.state = {
          browseReviewList: [],
          hover2: false,
        };
      }
    
      setBrowseList = (item) => {
        this.setState({
          browseReviewList: item
        });
      }; 

      setHoverIn2 = () => {
        this.setState({
          hover2: true
        });
      };

      setHoverFalse2 = () => {
        this.setState({
          hover2: false
        });
      };

    myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <div id = "sliderIcon"><FaAngleDoubleLeft  id = "sliderL" size = "50" color = "white"/></div> : <div id = "sliderIcon"><FaAngleDoubleRight id = "sliderR" size = "50" color = "white"/></div>
        return (
            <div onClick={onClick} disabled={isEdge}>
            {pointer}
            </div>
        )
    }

  render(){

    const song0 = this.props.songs; 
    const songNewR = song0.filter((song) => {
      if(song.id == 0 || song.id == 1 || song.id == 2) {
        return song
      }
      
    });

    const songList0 = songNewR.map((song) => {
      return (
            <div className="displayImage" onClick = {() => {this.props.setsongId(song.id)}}>
                <img className="imageOptions" src = {song.image} onMouseEnter = {this.setHoverIn2} onMouseLeave = {this.setHoverFalse2}/>
                <text>{song.artist}</text>
                <p>{song.title}</p>
            </div>
      );
    })

    const song1 = this.props.songs; 
    const songTrending = song1.filter((song) => {
      if(song.id == 0 || song.id == 1 || song.id == 2) {
        return song
      }
      
    });

    const songList1 = songTrending.map((song) => {
      return (
            <div className="displayImage" onClick = {() => {this.props.setsongId(song.id)}}>
                <img className="imageOptions" src = {song.image} onMouseEnter = {this.setHoverIn2} onMouseLeave = {this.setHoverFalse2}/>
                <text>{song.artist}</text>
                <p>{song.title}</p>
            </div>
      );
    })

    const song2 = this.props.songs; 
    const songMostP = song2.filter((song) => {
      if(song.id == 0 || song.id == 1 || song.id == 2) {
        return song
      }
      
    });

    const songList2 = songMostP.map((song) => {
      return (
            <div className="displayImage" onClick = {() => {this.props.setsongId(song.id)}}>
                <img className="imageOptions" src = {song.image} onMouseEnter = {this.setHoverIn2} onMouseLeave = {this.setHoverFalse2}/>
                <text>{song.artist}</text>
                <p>{song.title}</p>
            </div>
      );
    })

    return (
      <div id = "BrowseBox">
        <text id = "textTitle">New Releases</text> 
        <div className = "displayBoxRow">
            <Carousel renderArrow={this.myArrow} pagination = {false} disableArrowsOnEnd = {false} breakPoints={breakPoints}>
              {songList0}
            </Carousel>
        </div>
        <text id = "textTitle">Trending</text>
        <div className = "displayBoxRow">
            <Carousel renderArrow={this.myArrow} pagination = {false} disableArrowsOnEnd = {false} breakPoints={breakPoints}>
              {songList1}
            </Carousel>
        </div>
        <text id = "textTitle">Most Popular</text>
        <div className = "displayBoxRow">
            <Carousel renderArrow={this.myArrow} pagination = {false} disableArrowsOnEnd = {false} breakPoints={breakPoints}>
              {songList2}
            </Carousel>
        </div> 
      </div>

    );
  }
}

export default Browse;

