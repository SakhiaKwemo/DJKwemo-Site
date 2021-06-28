import React, {Component} from 'react';

import Songs from "../Songs/Songs"

import './AlbumPlayer.css'

import {FaArrowCircleLeft, FaPlay } from 'react-icons/fa';

export default class AlbumPlayer extends Component {
  
  render(){
    const songs = this.props.songs;
    console.log(songs);
    const songList = songs.map((song,index) => {
        return (
          <div className = "displayAlbumList" onClick = {() => {this.props.setsongId(song.id)}} >
            <text>{index + 1}</text>
            <text>{song.artist}</text>
            <p>{song.songName}</p>
            <img style = {{height: "20px", width: "20px"}} src = "/images/explicit.png"/>
          </div>
        );
      })

    return (
      <div id="AlbumPlayerBox"> 
        <div id = "AlbumPlayerinputBox">
          <img id = "albumPlayerImage" src = {this.props.albums.image}/>
          <div id = "albumPlayerInfoBox">
                <text id = "albumPlayerTitle">{this.props.albums.albumName}</text>
    <p id = "albumPlayerDescription">{this.props.albums.info}</p>
                <div style = {{display: "flex", alignItems: "flex-end", justifyContent: "center", flexDirection: "row", height: "50%"}}>
                    <button onClick = {() => {this.props.setsongId(0)}} className = "albumButton">
                        <FaPlay style = {{marginRight: "10px"}} size = "20" color = "purple"/>
                        <text>Play</text>
                    </button>
                </div>
                <FaArrowCircleLeft onClick = {this.props.setAlbumMode} id = "backbutton" color="rgb(233, 135, 178)" size="30"/>  
            </div>
        </div>
        {songList}
      </div>
    );
  }
}





