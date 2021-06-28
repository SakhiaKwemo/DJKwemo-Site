import React, {Component} from 'react';
import './Songs.css';
import {FaSearch} from 'react-icons/fa';

class Songs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  setSearchTerm = (item) => {
    this.setState({
      searchTerm: item
    })
  }

  render(){

    const songs = this.props.songs;

    const songList = 
    songs.filter((song) => {
      if (song.type == "SONG") {
        if(this.state.searchTerm == ""){
          return song;
        }
        else if (song.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
          return song
        }
      }
    }).map((song) => {
      return (
        <div className = "displaySongImage" onClick = {() => {this.props.setsongId(song.id)}} >
          <img className = "songImage" src = {song.image}/>
          <text>{song.artist}</text>
          <p>{song.title} (Prod. By DJKwemo)</p>
          <img style = {{height: "20px", width: "20px"}} src = "/images/explicit.png"/>
        </div>
      );
    })

    return (
      <div id="SongBox"> 
        <div id = "inputBox">
          <text>Songs</text>
          <FaSearch id = "searchIcon" color="white" size="18"/>  
          <input
            id = "searchBar"
            type="search"
            onChange = {event => {this.setSearchTerm(event.target.value)}}
          /> 
        </div>
        <div className = "songList">
          {songList}
        </div>
      </div>
    );
  }
}



export default Songs;

