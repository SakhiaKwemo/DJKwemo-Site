import React, {Component} from 'react';
import './AlbumSelector.css';

import {FaSearch, FaRegPlayCircle} from 'react-icons/fa';

export default class AlbumSelector extends Component {
  
  render(){
    const albums = this.props.albums;

    return (
      <div id="AlbumBox"> 
        <div id = "AlbuminputBox">
          <text>Albums</text>
        </div>
        <div className = "displayAlbumBoxRow">
          <div onClick = {() => {this.props.setAlbumID(0)}} className="displayAlbumImage">
            <img className="imageAlbumOptions" src = {albums.image} onMouseEnter = {this.setHoverIn2} onMouseLeave = {this.setHoverFalse2}/>
            <text>{albums.artist}</text>
            <p>{albums.albumName}</p>
          </div>
        </div>
      </div>
    );
  }
}





