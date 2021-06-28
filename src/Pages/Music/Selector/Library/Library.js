import React, {Component} from 'react';
import './Library.css';

import axios from "axios"; 

import {FaSearch, FaPlay, FaRegPlayCircle, FaDownload, FaArrowCircleDown, FaRegCircle, FaPlayCircle} from 'react-icons/fa';

import StarRatingComponent from 'react-star-rating-component';

export default class Library extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "", 
      color: "#FFF785" //yellow #FFBC85 //orange #FA7777//red
    };
  }

  setSearchTerm = (item) => {
    this.setState({
      searchTerm: item
    })
  }

  setColor = (item) => {
    this.setState({
      color: item
    })
  }

  makeColor = (item) => {
    if (item == "SONG") {
      return "#FFF785";
    }

    if (item == "INSTRUMENTAL") {
      return "#FFBC85";
    }

    if (item == "BEAT") {
      return "#FA7777";
    }
  }

  render(){

    const songs = this.props.songs;

    const songList = 
      songs.filter((song) => {

        if(this.state.searchTerm == ""){
          return song;
        }
        else if (song.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
          return song
        }
      }).map((song,index) => {
      return (
        <tr className = "rowTitle"key={index} onClick = {() => {this.props.setsongId(song.id)}} >
          <td className="libTitle2">
            <text>{song.title}</text>
          </td>
          <td style={{color: this.makeColor(song.type)}}>{song.type}</td>
          <td>{song.BPM}</td>
          <td>
            <button className = "genreButton2">{song.genre_tags}</button>
          </td>
          <td>
          <StarRatingComponent
            name="rate3" 
            value={song.rating} /* number of selected icon (`0` - none, `1` - first) */
            starCount={5} /* number of icons in rating, default `5` */
            starColor={"pink"}
            editing={false} /* is component available for editing, default `true` */
          />
          </td>
          <td>
            <a href ={song.mp3} download = {song.title}>
              <FaDownload color="white"/>
            </a>
          </td>
        </tr>
      );
    })

    return (
      <div id="LibraryBox"> 
        <div id = "LibinputBox3">
          <div className = "typeDiv">
            <button className = "typeButton">BEATS</button>
            <button className = "typeButton">INSTRUMENTALS</button>
            <button className = "typeButton">SONGS</button>
          </div>
          <text>Library</text>
          <FaSearch id = "lib_searchIcon2" color="white" size="15"/>  
          <input
            id = "searchBar2"
            type="text"
            onChange = {event => {this.setSearchTerm(event.target.value)}}
          /> 
        </div>
        <div className = "libraryContent">
          <div>
            <button className = "genreButton">#Piano</button>
            <button className = "genreButton">#Guitar</button>
            <button className = "genreButton">#Strings</button>
            <button className = "genreButton">#Synth</button>
            <button className = "genreButton">#Flute</button>
            <button className = "genreButton">#Brass</button>
            <button className = "genreButton">#Organ</button>
            <button className = "genreButton">#Bells</button>
          </div>
          <div>
          </div>
          <div>
            <button className = "genreButton">#Party</button>
            <button className = "genreButton">#Emotional</button>
            <button className = "genreButton">#Happy</button>
            <button className = "genreButton">#Trap</button>
            <button className = "genreButton">#Cinematic</button>
            <button className = "genreButton">#Cypher</button>
            <button className = "genreButton">#RnB</button>
            <button className = "genreButton">#Dancehall</button>
          </div>
        </div>
        <table className="libTable">
          <thead >
            <tr className="libHead">
              <td className="libTitle3">TITLE</td>
              <td className= "libHeadType">TYPE</td>
              <td>BPM</td>
              <td>#TAGS</td>
              <td>RATING</td>
              <td>MP3</td>
            </tr>
          </thead>
          <tbody className="libBody">
            {songList}
          </tbody>
        </table>
      </div>
    );
  }
}

